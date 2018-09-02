// Initialize Firebase
var config = {
  apiKey: "AIzaSyDsZnNlyyeSvAIBiqrVoL6dQk7e9hBUb5g",
  authDomain: "portfolio-35f55.firebaseapp.com",
  databaseURL: "https://portfolio-35f55.firebaseio.com",
  projectId: "portfolio-35f55",
  storageBucket: "portfolio-35f55.appspot.com",
  messagingSenderId: "1033990133618"
};
  firebase.initializeApp(config);

  var database = firebase.database();

    $('#submitContact').on('click',function(event){
      event.preventDefault();

      //Gets values from form
      name = $('#name').val().trim();
      email = $('#email').val().trim();
      message = $('#message').val().trim()

      console.log(name);
      console.log(email);
      console.log(message);
      
      //Input fields into an object
      var inputs = {
        name:name,
        email:email,
        message:message
      }

      //Sets database
      firebase.database.ref().set({
        name:name,
        email:email,
        message:message
      });

      firebase.database.ref().push(inputs)
    }); 




    // //listen to data updates from firebase
    //   newDatabase.on("value", function (snapshot){
    //   console.log(snapshot.val());
    //  //when the data updates at firebase, put it in the data variable
    //   data= snapshot.val();
    // })
//   //Entire Form (handler)
//   $('#component4').submit(function(event) {
    
//     var $form = $(this);
//     console.log("Submit to Firebase");
    
//     //disable submit button
//     $form.find("#saveForm").prop('disabled', true);
    
//     //get values to send to Firebase
//     var contactName = $('#component1').val();
//     console.log(contactName);
    
//     var contactEmail = $('component2').val();
//     console.log(contactEmail);
    
//     var contactMessage = $('#component3').val();
//     console.log(contactMessage);
    
//     //take the values from the form, and put them in an object
//     var newActivity = {
//       "description": contactName,
//       "title": contactEmail,
//       "type": contactMessage
//     }
//     //put new object in data array
//     data.push(newActivity);
//     console.log(data);
    
//       //send the new data to Firebase
//           database.set(data, function(err){
//         if(err){
//           alert("Data no go");
//         }
//       });
  
//       return false;
//     })
// //     ///Make a login form submission handler
// //     $('#login').submit(function(event){
// //       var $form = $(this);
// //       $form.find('#registerForm').prop('disabled', true);
      
// //       //get the value of the login email
// //           var login = $("#loginInput").val();
// //       //get the value of the password
// //       var password = $("#passwordInput").val();
       
// //       console.log(login, password);
// //       register(login, password);
      
// //       return false;
// //     })
  
// //     ////Detect the authication state
// //     var reg = new Firebase("https://data-application1.firebaseio.com");
// //     reg.onAuth(function(authData){
// //       console.log("info on authentication");
// //       if(authData){
// //         //you are logged in
        
// //       }else{
// //         //you are not logged in
        
// //       }
// //     })
// //     //////Let a user Register in Firebase
// //     //////with password/email
// //     function register(email, password){
// //       reg.createUser({
// //         email: email,
// //         password: password
// //       }, function(error, userData){
// //         if(error){
// //           alert("You did not register");
// //         }else{
// //           alert("You registered"+userData.uid);
// //         }
// //       })
// //     }
// //   })