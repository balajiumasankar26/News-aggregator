const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true,
       trim: true,
   },
   description: {
       type: String,
       required: true,
       trim: true,
   },
   category:{
    type:String,
   },
   url: {
       type: String,
       required: true,
   },
   imageUrl: {
       type: String,
   },
   publishedAt: {
       type: Date,
       required: true,
   },
   source: {
       type: String,
       required: true,
   },
});

module.exports = mongoose.model('News', newsSchema);
