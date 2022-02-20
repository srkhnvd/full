$(document).ready(function(){
  $('#log').click(function(){
    var email = $("#email").val();
    var pas = $("#pas").val();
    var pass = $("#pass").val();
    if (email == "" && pas == "" && pass == ""){
      $("#email,#pas,#pass").css('border','1px solid red');
    }
    else{
      if (email != "") {
        $("#email").css('border','1px solid green');
        if (pas != "") {
          $("#pas").css('border','1px solid green');
          if (pass != "") {
            $("#pass").css('border','1px solid green');
          }
        }
      }
      if (email != "" && pas != "" && pass != "") {
        if(pas == pass){
          alert("Your data is saved");
          $("#email,#pas,#pass").trigger('reset');
        }
        else{
          $("#pas,#pass").css('border','1px solid red');
        }
      }
    }
  });
});
