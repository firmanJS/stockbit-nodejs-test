'use strict';
const axios = require('axios')
class MoviesController {
  
  static index(req,res){
    res.json({
      msg:'Stockbit express app test',
      info : {
        url:`http://localhost:${process.env.APP_PORT}/search`,
        method:"GET",
        param:{s:"search parameter",page:"get page movies"}
      }
    });
  }

  static async search(req,res){
    const search = req.query.s || 'Batman', page = req.query.page || 2;
    try {
      const response = await axios.get(`${process.env.API_URL}?apikey=${process.env.API_KEY}&s=${search}&page=${page}`);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.data.status).json(error.response.data);
    }
  }
}

module.exports = MoviesController
