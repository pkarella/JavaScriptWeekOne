var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.doctors = function(illness) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ illness+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(response) {
     console.log(response)
     console.log( response.data.length)
     for (i=0;i<response.data.length; i++){
       $('#result').append("<li><h3> Name:</h3> " + response.data[i].profile.last_name + ", " + response.data[i].profile.first_name + " " + response.data[i].profile.title+"</li>");
       $('#result').append( "<li><h3>Biography:</h3> " + response.data[i].profile.bio + "</li>");
       $('#result').append('<img src="'+ response.data[i].profile.image_url + '"</img>');
     }
   })
     .fail(function(error){
     });
    };

     exports.doctorModule = Doctor;
