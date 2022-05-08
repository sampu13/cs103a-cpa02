'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var foodreviewSchema = Schema( {
  userId: ObjectId,
  review: String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'FoodreviewItem', foodreviewSchema );
