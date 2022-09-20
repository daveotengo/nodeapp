

module.exports = app => {  
    const articles = require("./service.js");
    
    var router = require("express").Router();  // Create a new Article
    router.post("/", articles.create);  // Retrieve a single Article with id
    router.get("/:id", articles.findOne);  // Update a Article with id
    router.put("/:id", articles.update);  // Delete a Article with id
    router.delete("/:id", articles.delete);  
    app.use('/api/articles', router);};