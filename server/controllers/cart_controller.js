require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);


module.exports = {
  add: (req, res, next) => {
    let dbInstance = req.app.get("db");
    
     let { product_id, user_id, quantity } = req.body;
    console.log(req.body);

    dbInstance
      .add_product([product_id, req.session.user.user_id, quantity ])
      .then(response => {
        console.log("product added");
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let cart_id = req.params.id;
    console.log(cart_id);
    console.log(req.params);

    dbInstance
      .delete_product([cart_id, req.session.user.user_id])
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  deleteLine: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let product_id = req.params.id;
    console.log('I got it');
    console.log(req.params);

    dbInstance
      .delete_line([product_id, req.session.user.user_id])
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
    },

  update: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let cart_id = req.query.id;
    console.log(cart_id);
    console.log(req.query);

    dbInstance
      .update_product([cart_id, req.session.user.user_id, quantity])
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

//displays d product in d cart
  get: (req, res, next) => {
    let dbInstance = req.app.get("db");

   dbInstance
     .get_cart(req.session.user.user_id)
     .then(response => {
       console.log("retrieved cart");
       res.status(200).send(response);
     })
     .catch(err => {
       res.status(500).send("Oops! Something went wrong.");
       console.log(err);
     });
  },
//Stripe
  handlePayment: (req, res) => {
    const { amount, token:{id}} = req.body
    stripe.charges.create(
        {
            amount: amount,
            currency: "usd",
            source: id,
            description: "Test charge from Travis"
        },
        (err, charge) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                console.log(charge)
                return res.status(200).send(charge)
            }
        }
    )
},
//adding account info to the db
  save: (req, res, next) => {
  let dbInstance = req.app.get("db");
  
   let { fullName, emailAddress, street, city, zip, state, phoneNumber } = req.body;
  console.log(req.body);

  dbInstance
    .add_accountInfo([fullName, emailAddress, street, city, zip, state, phoneNumber ])
    .then(response => {
      console.log("info added");
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send("Oops! Something went wrong.");
      console.log(err);
    });


},
getInfo: (req, res, next) => {
  let dbInstance = req.app.get("db");

   dbInstance
   .get_accountInfo()
//    .get_accountInfo([req.session.user.user_id])
   .then(response => {
     console.log("retrieved info");
     res.status(200).send(response);
   })
   .catch(err => {
     res.status(500).send("Oops! Something went wrong.");
     console.log(err);
   });
  }
}
