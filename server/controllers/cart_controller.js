module.exports = {
  add: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { product_id, user_id, quantity } = req.body;

    dbInstance
      .add_product([product_id, req.session.user.user_id, quantity])
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
    let product_id = req.params.id;
    console.log(product_id);
    console.log(req.params);

    dbInstance
      .delete_product([product_id, req.session.user.user_id])
      .then(response => res.status(200).send(response))
      .catch(err => {
        res.status(500).send("Oops! Something went wrong.");
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const { id } = req.query;
  }
};
