//DON'T FORGET TO ADD sampleService.js TO INDEX.js

angular.module('starter').factory('sampleService',function(){

  var service = {

    model:{
      list:[],
      item:[]

    }

  };

  return service;

});
