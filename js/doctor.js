var apiKey = require('./../.env').apiKey;

function Doctor(lastName, firstName, title, bio, image){
  this.lastName = lastName;
  this.firstName= firstName;
  this.title = title;
  this.bio = bio;
  this.image = image;
}

Doctor.prototype.doctors = function(illness, doctorInformation) {
  var docs =[];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ illness+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=10&user_key=' + apiKey)
   .then(function(response) {
     console.log(response)
     console.log( response.data.length)
     for (i=0;i<response.data.length; i++){
       var lastName = response.data[i].profile.last_name;
       var firstName = response.data[i].profile.first_name;
       var title = response.data[i].profile.title;
       var bio = response.data[i].profile.bio;
       var image = response.data[i].profile.image_url;
      newDoctor = new Doctor (lastName, firstName, title, bio, image);
      doc.push(newDoctor);
    }
     doctorInformation(docs);
   })
     .fail(function(error){
     });
    };

     exports.doctorModule = Doctor;
