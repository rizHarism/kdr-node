const { Articles } = require("../../../utils/db");
const dotenv = require("dotenv");
dotenv.config();

async function get(req, res) {
  try {
    const articles = await Articles.find({}, { _id: 0, __v: 0 });
    console.log(articles);
    if (articles.length > 0) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: {
          articles,
        },
        message: "Articles successfully retrivied",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: [],
        message: "Articles not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}

async function detailArticle(req, res) {
  try {
    const slug = req.params.slug;
    const article = await Articles.findOne({ slug: slug }, { _id: 0, __v: 0 });
    console.log(slug);
    console.log(article);
    if (article) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: {
          ...article._doc,
        },
        message: "Articles successfully retrivied",
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        data: [],
        message: "Articles not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
  res.end();
}

module.exports = { get, detailArticle };
