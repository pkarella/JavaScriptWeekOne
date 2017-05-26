(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = 'd9fe206ebd6a7ef3083d5e0746925c99';

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.doctors = function(illness) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ illness+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(response) {
     console.log(response)
     response.data.forEach(function(physician){
       $('#result').append("<li><h3> Name:</h3> " + physician.profile.last_name + ", " + physician.profile.first_name + " " + physician.profile.title+"</li>");
       $('#result').append( "<li><h3>Biography:</h3> " + physician.profile.bio + "</li>");
       $('#result').append('<img src="'+ physician.profile.image_url + '"</img>');
      });
     })
     .fail(function(error){
     });
     };

     exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var newDoctors = new Doctor();
  $('#doctor').click(function() {
    var illness = $('#illness').val();
    $('#illness').val("");
    newDoctors.doctors(illness);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/doctor.js":2}]},{},[3]);
