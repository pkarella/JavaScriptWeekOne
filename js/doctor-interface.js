var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var newDoctors = new Doctor();
  $('#doctor').click(function() {
    var illness = $('#illness').val();
    $('#illness').val("");
    newDoctors.doctors(illness);
  });
});
