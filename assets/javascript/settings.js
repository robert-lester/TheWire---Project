$(document).ready(function() {

var database = firebase.database();


var userId = firebase.auth().currentUser.uid;

database.ref('users/' + user.id ).on("value", function(snapshot)  {

    $("#profileName").html(snapshot.val().name);
    $("#profileAgency").html(snapshot.val().agency);
    $("#profileTitle").html(snapshot.val().jobTitle);
    $("#profilePhone").html(snapshot.val().phone);
    $("#profileEmail").html(snapsot.val().email);



})



$('#settingsSubmit').on('click', function writeUserData() {
  event.preventDefault();

var name = $('#name').val().trim(); 
var email = $('#email').val().trim();
var agency = $('#agency').val().trim();
var jobTitle = $('#jobTitle').val().trim();
var phone = $('#phone').val().trim();
var facebookURL = $('#facebook').val().trim();
var instagramURL = $('#instagram').val().trim();
var linkedInURL = $('#linkedIn').val().trim();
// var profile_picture = $('#inputFile')


  var userId = firebase.auth().currentUser.uid;

  firebase.database().ref('users/' + userId).set({
    userId: userId,
    name: name,
    email: email,
    agency: agency,
    jobTitle: jobTitle,
    phone: phone,
    facebookURL: facebookURL,
    instagramURL: instagramURL,
    linkedInURL: linkedInURL,
    // profilePicture : imageUrl
  });
})




})

