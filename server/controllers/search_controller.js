module.exports = {

    search: (req,res,next) => {
        const dbInstance = req.app.get("db");
        const { name } = req.params;
        
        dbInstance.search_product(name)
        .then( response => res.status(200).send(response) )
        .catch( err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong."})
            console.log(err)
        });
    }
}