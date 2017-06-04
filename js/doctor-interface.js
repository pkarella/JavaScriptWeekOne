var Doctor = require('./../js/doctor.js').doctorModule;


var doctorInformation = function(coolDoctor) {
  coolDoctor.forEach(function(newCoolDoctor){
    $('#result').append("<li><h3> Name:</h3> " + newCoolDoctor.lastName + ", " + newCoolDoctor.firstName + " " + newCoolDoctor.title+"</li>");
    $('#result').append( "<li><h3>Biography:</h3> " + newCoolDoctor.bio + "</li>");
    $('#result').append('<img src="'+ newCoolDoctor.image + '"</img>');
    });
  };

$(document).ready(function() {
  var newDoctorObject = new Doctor();
  $('#doctor').click(function() {
    var illness = $('#illness').val();
    $('#illness').val("");
    $('#result').empty();
    newDoctorObject.doctors(illness, doctorInformation);
  });
});
