module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .getAll_products()
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },
  
  getTops: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_tops()
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  getBottoms: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_bottoms()
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  getFootwear: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_footwear()
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  editFullNameInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_name_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

   editEmailAddressInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)
    console.log(id)


    dbInstance.edit_emailAddress_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

  editStreetInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_street_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

  editCityInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_city_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

  editZipInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_zip_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

  editStateInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_state_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  },

  editPhoneNumberInfo: (req, res)=>{
    let dbInstance = req.app.get('db')
    let {id} = req.params
    let {text} = req.body
    console.log(req.body)

    dbInstance.edit_phoneNumber_info([id,text])
    .then(resp=> {
      res.status(200).send('edited')
    })
  }



};
      


