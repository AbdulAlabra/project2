// -----------------------LOGIN---------------------------- //

$(function() {
  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
   $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

$('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
   $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
});

});

// -----------------------------LOGIN script-------------------------------//

function validateForm(){
  event.preventDefault();

  var uname = document.forms["myForm"]["username"].value;
  var pass = document.forms["myForm"]["password"].value;
  var API = {
    saveExample: function (example) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/examples",
        data: JSON.stringify(example)
      });
    },
    getExamples: function () {
      return $.ajax({
        url: "api/examples",
        type: "GET"
      });
    },
    deleteExample: function (id) {
      return $.ajax({
        url: "api/examples/" + id,
        type: "DELETE"
      });
    }
  };


// User Login/ Sign up


function logIn(usernameInput, paaswordInput) {
    API.getExamples().then(function (data) {
      var currentUser = data.find(function (usersDB) {
        if (usersDB.userName === usernameInput && usersDB.password === paaswordInput) {
          return usersDB;
        }
      });
      console.log(currentUser);
      if (currentUser === undefined) {
        alert("username or password is incorrect");
      } else {
        window.location.replace("http://localhost:3000/homepage");
        alert("welcome back!");
      }
    });
  }

  $("#login-submit").on('click', function(){
      console.log(uname)
      console.log(pass);
      logIn(uname, pass);

  });
  
  function signUp(usernameInput, paaswordInput) {
    API.getExamples().then(function(data) {
      var checkUsername = data.find(function(DBusername) {
        return DBusername.userName === usernameInput;
      });
      console.log(checkUsername);
      if (checkUsername === undefined) {
        alert("username is avaliable");
        var user = {
          userName: usernameInput,
          password: paaswordInput
        };
        API.saveExample(user).then(function() {
          refreshExamples();
        });
        $exampleText.val("");
        $exampleDescription.val("");
      } else {
        alert("username is taken");
      }
    });
  }


//Other shit


  if((!isEmpty(uname, "Log In")) && (!isEmpty(pass, "Password"))){

console.log("GOOD")

      return true;
  }else{

      console.log("BAD")

      return false;
  }
}

function isEmpty(elemValue, field){
  if((elemValue == "") || (elemValue == null)){
      alert("you can not have "+field+" field empty");
      return true;
  }else{
      return false;
  }
}

// onclick login

//onClick on 'Browse' load the internal page
$(function(){
    $('#browse_app').click(function(){
        $.load('templates/home.html');
    });
});


// ANIMATED TEXT //
