module.exports = {

    getAll: (req, res, next ) => {
        const dbInstance = req.app.get("db");
        
        dbInstance.getAll_products()
        .then( response => res.status(200).send(response) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
    }

}