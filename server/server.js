require("dotenv").config();
const express = require("express"),
  session = require("express-session"),
  massive = require("massive"),
  axios = require("axios"),
  bodyParser = require("body-parser");

const cart_controller = require("./controllers/cart_controller");
const auth_controller = require("./controllers/auth_controller");
const products = require("./controllers/products_controller");
const search_controller = require("./controllers/search_controller");

const stripe = require("stripe")(process.env.STRIPE_SECRET);

const nodemailer = require("nodemailer");
 const path = require("path");


///-------NODEMAILER---------/////

// const nodemailer = require("nodemailer");
// const path = require("path");

// var transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS
//   }
// });

// let mailOptions = {
//   from: '"Pradeep Malla" <mallap2045@gmail.com>',
//   to: "mallapradeep88@gmail.com",
//   subject: "Hello World!!!",
//   text: "ORDER CONFIRMED",
//   html: "<h1>Thank you for Shopping</h1>"
// };
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log("The message was sent!");
//   console.log(info);
// });

/////////////--------------////////////////////

//initialize express app
const app = express();
app.use(bodyParser.json());

 app.use( express.static( `${__dirname}/../build` ) );

//destructure from process.env
const {
  SERVER_PORT,
  SECRET,
  REACT_APP_CLIENT_ID,
  REACT_APP_DOMAIN,
  CLIENT_SECRET,
  CONNECTION_STRING,
  NODE_ENV,
  STRIPE_SECRET
} = process.env;

//DATABASE CONNECTION
//app.set is taking d info n storing in d object
//db,db --> db is d key
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("db connected");
  })
  .catch(err => {
    console.log(err);
  });

//middleware
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//endpoints
//cart
app.get(`/api/cart`, cart_controller.get); //gets d cart list(whatever product is added)
app.post(`/api/cart`, cart_controller.add); //adds products to the cart
app.put(`/api/cart/:id`, cart_controller.update); //increase or decrease product
app.delete(`/api/cart/:id`, cart_controller.delete); //deletes product from the cart
app.delete(`/api/cartLine/:id`, cart_controller.deleteLine);

//accountInfo
app.get("/api/findUser", cart_controller.checklogin);
app.get(`/api/accountInfo`, cart_controller.getInfo);
app.post(`/api/accountInfo`, cart_controller.save);

//checkout
app.post(`/api/checkout`, cart_controller.handlePayment); //show products at chkout
app.delete('/api/deleteCart', cart_controller.clearCart);

//category
app.get("/api/products/tops", products.getTops);
app.get("/api/products/bottoms", products.getBottoms);
app.get("/api/products/footwear", products.getFootwear);

// //products
app.get(`/api/products`, products.getAll); //displays the products at shop

// //search
app.get(`/api/search/:name`, search_controller.search); //display d product ur searchin for

//edit Account INfo
app.put(`/api/editNameInfo/:id`, products.editFullNameInfo);
app.put(`/api/editEmailAddressInfo/:id`, products.editEmailAddressInfo);
app.put(`/api/editStreetInfo/:id`, products.editStreetInfo);
app.put(`/api/editCityInfo/:id`, products.editCityInfo);
app.put(`/api/editZipInfo/:id`, products.editZipInfo);
app.put(`/api/editStateInfo/:id`, products.editStateInfo);
app.put(`/api/editPhoneNumberInfo/:id`, products.editPhoneNumberInfo);

//auth0 comes to this endpoint to get
app.get("/auth/callback", async (req, res) => {
  //use code from query in payload for token
  const payload = {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code,
    grant_type: "authorization_code",
    redirect_uri: process.env.AUTH_URI
  };
  //trade the code for token
  let resWithToken = await axios.post(
    `https://${REACT_APP_DOMAIN}/oauth/token`,
    payload
  );
  //use token to get user data
  let resWithUserData = await axios.get(
    `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
      resWithToken.data.access_token
    }`
  );
  console.log("user data", resWithUserData.data);

  let { email, name, picture, sub } = resWithUserData.data;
  //  we r invoking n sql file --massive goes n finds that file n invokes it
  //  aarays gets returned from database query
  let db = req.app.get("db");
  //    let foundUser =  await req.app.get('db').find_user([sub])
  let foundUser = await db.find_user([sub]);
  if (foundUser[0]) {
    console.log(foundUser[0]);
    req.session.user = foundUser[0];
    res.redirect("/#/cart");
  } else {
    let createdUser = await db.create_user([name, email, picture, sub]);
    req.session.user = createdUser[0];
    res.redirect("/#/private");
  }
});

//request went to the FE n d proxy directs it to the BE --> thats wat redirect uri is doing
//"/oauth/token" is d api of Auth0
//req.session.user is sendin back d response whereever d request is comin from
//any time i query d db i get an array maybe array of 0 elements or many

function envCheck(req, res, next) {
  if (NODE_ENV === "dev") {
    req.app
      .get("db")
      .get_user_by_id()
      .then(userWithIdOne => {
        req.session.user = userWithIdOne[0];
        next();
      });
  } else {
    next();
  }
}

app.get("/api/user-data", envCheck, (req, res) => {
  if (req.session.user) {
    res.status(200).send(req.session.user);
  } else {
    res.status(401).send("NOOOOO!!!");
  }
});

app.get("/auth/logout", (req, res) => {
  req.session.destroy();
  res.redirect(process.env.SUCCESS);
});

//listen port
app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
  console.log(process.env.GMAIL_USER);
});

/////////////////////////////////////////////

////NODEMAILER///////////////////////

// const nodemailer = require("nodemailer");
// const path = require("path");

// app.post("/api/sendEmail", (req, res) => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });
//   let { text } = req.body;

//   let mailOptions = {
//     from: "Pradeep" < "mallap2045@gmail.com",
//     to: "mallapradeep88@gmail.com",
//     subject: "Order Confirmed",
//     text: text
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }

//     res.render("contact", { msg: "email has been sent" });
//   });
// });

////////////////////////////////////

////NODEMAILER///////////////////////


app.post('/api/send', (req,res)=>{
  let transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      auth:{
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      },
      tls:{
          rejectUnauthorized: false
      }
  })
  let{text} = req.body

  let mailOptions= {
      from: 'LUGAWEAR' <'mallapradeep88@gmail.com',
      to: 'mallap2045@gmail.com',
      subject: 'Order Confirmed',
      text: text
  }

  transporter.sendMail(mailOptions, (error,info)=>{
      if(error){
          return console.log(error)
      }

      res.render('contact', {msg: 'email has been sent'})
  })
})

 ////////////////////////////////////////
 
//  app.post('/api/send', (req,res)=>{
// var transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'mallap2045@gmail.com',
//         pass: 'salamnamaste'
//     }
// });

// console.log('created.................................');
// transporter.sendMail({
// from: 'mallap2045@gmail.com',
//   to: 'mallapradeep88@gmail.com',
//   subject: 'hello world!',
//   text: 'hello world!'
// });
//   transporter.sendMail(mailOptions, (error,info)=>{
//           if(error){
//               return console.log(error)
//           }
   
//           res.render('contact', {msg: 'email has been sent'})
//       })
//  })