const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;// Create Article
exports.create = (req, res) => {
  const article = {
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published ? req.body.published : false
  };  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
        err.message || "Some error occurred while creating the Tutorial."
     });
    });
};
// Find Single Article
exports.findOne = (req, res) => {
  const id = req.params.id;
  Article.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Article with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
      message: "Error retrieving Article with id=" + id
    });
  });
};
// Update Article
exports.update = (req, res) => {
  const id = req.params.id;
  Article.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Article was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Article with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Article with id=" + id
    });
  });
};
// Delete Article
exports.delete = (req, res) => {
  const id = req.params.id;
  Article.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Article was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Article with id=${id}.`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Article with id=" + id
    });
  });
};