module.exports = (sequelize, Sequelize) => {
  
    const Article = sequelize.define("article", {
      
      title: {
         type: Sequelize.STRING
      },
      subtitle: {
         type: Sequelize.STRING
      },
      author: {
         type: Sequelize.STRING
      },
      published: {
         type: Sequelize.BOOLEAN
      }  });  
      return Article;
  };