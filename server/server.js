
require('dotenv').config();
const express = require('express')
, session = require('express-session')
, massive = require('massive')
, axios = require('axios')
 , bodyParser = require('body-parser');

const cart_controller = require('./controllers/cart_controller');
const auth_controller = require('./controllers/auth_controller');
const products = require('./controllers/products_controller');
const search_controller = require('./controllers/search_controller');

const stripe = require('stripe')(process.env.STRIPE_SECRET);



//initialize express app
const app = express();
app.use(bodyParser.json());

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
    } = process.env 

//DATABASE CONNECTION
//app.set is taking d info n storing in d object
//db,db --> db is d key 
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
}).catch(err => {
    console.log(err)
})

//middleware
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

//endpoints
//cart
app.get(`/api/cart`, cart_controller.get)
app.post(`/api/cart`, cart_controller.add); //adds products to the cart
app.put(`/api/cart/:id`,cart_controller.update); //increase or decrease product
app.delete(`/api/cart/:id`, cart_controller.delete); //deletes product from the cart
app.delete(`/api/cartLine/:id`, cart_controller.deleteLine); 



//checkout
app.post(`/api/checkout`, cart_controller.handlePayment); //show products at chkout



// //products
app.get(`/api/products`, products.getAll ); //displays the products at shop


// //search
app.get(`/api/search/:name`, search_controller.search); //display d product ur searchin for




//auth0 comes to this endpoint to get
app.get('/auth/callback', async (req, res) => {
    //use code from query in payload for token
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    //trade the code for token
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    //use token to get user data
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    console.log('user data', resWithUserData.data)

    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData.data
    //  we r invoking n sql file --massive goes n finds that file n invokes it 
    //  aarays gets returned from database query
     let db = req.app.get('db')
//    let foundUser =  await req.app.get('db').find_user([sub])
    let foundUser =  db.find_user([sub])
   if (foundUser[0]) {
       req.session.user = foundUser[0];
       res.redirect('/#/private')
   } else {
    let createdUser = await db.create_user([name, email, picture, sub])
    req.session.user = createdUser[0];
    res.redirect('/#/private');
   }

})

//request went to the FE n d proxy directs it to the BE --> thats wat redirect uri is doing
//"/oauth/token" is d api of Auth0
//req.session.user is sendin back d response whereever d request is comin from
//any time i query d db i get an array maybe array of 0 elements or many

function envCheck(req, res, next) {
    if (NODE_ENV === 'dev') {
        req.app
            .get('db')
            .get_user_by_id()
            .then(userWithIdOne => {
                req.session.user = userWithIdOne[0]
                next();
            })
    } else {
        next()
    }
}

app.get('/api/user-data', envCheck,  (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('NOOOOO!!!')
    }
})

app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000')
})

//listen port
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})