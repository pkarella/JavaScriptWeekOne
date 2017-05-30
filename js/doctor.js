var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.doctors = function(illness) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ illness+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(response) {
     console.log(response)
     console.log(typeof response.data)
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
