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
  }
};
