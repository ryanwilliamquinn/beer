/**
* Beer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: 'true'
    },
    reviews: {
      collection: 'BeerReview',
      via: 'beer'
    },
    style: {
        model: 'BeerStyle'
    },
    locations: {
      collection: 'Location',
      via: 'beers'
    },
    image: {
        model: 'image'
    }
  }

};

