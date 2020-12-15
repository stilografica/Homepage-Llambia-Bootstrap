/*Start custom Javascript*/
//Alert interaction
$(document).ready(function(){
    $(".closes").click(function(){
      $("#myAlert").alert("close");
    });
  });
//Modal Login
$(document).ready(function(){
    $("#myLogin").click(function(){
      $("#myModal").modal();
    });
  });
//Collapse in modal
  $(document).ready(function(){
    $("#login").click(function(){
      $(".collapse1").collapse('show');
      $(".collapse2").collapse('hide');
    });
    $("#registre").click(function(){
      $(".collapse2").collapse('show');
      $(".collapse1").collapse('hide');
    });
  });
//Dynamic Tabs inside Modal
$(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
  });
//Popover "Regala una experiencia"
$(function () {
    $('[data-toggle="popover"]').popover()
})

//Tooltip product buttons
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//Toast element in modal button "¿Eres nuevo?"
$(document).ready(function(){
    $("#myBtn").click(function(){
      $('.toast').toast('show');
    });
  });  
// Forms invalid fields (login and subscription)
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
/*/End custom Javascript*/
