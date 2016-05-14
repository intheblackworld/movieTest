

  function signUp(){
    swal({   title: "Log In to Continue",
    html: true,
    text: "Username: <input type='text'><br>Password: <input type='password'> <br>Password: <input type='password'>",   type: "input",   showCancelButton: true,   closeOnConfirm: false,   animation: "slide-from-top",   inputPlaceholder: "Write something" }, function(inputValue){   if (inputValue === false) return false;      if (inputValue === "") {     swal.showInputError("You need to write something!");     return false   }      swal("Nice!", "You wrote: " + inputValue, "success"); });
  };



$('.profile-checkbox p').on("click",function(){
  $(this).children('label').css({'color':'#26a69a'});
})
