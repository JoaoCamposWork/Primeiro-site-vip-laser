document.addEventListener("DOMContentLoaded", function() {
    var btnToTop = document.getElementById("btnToTop");
  
    function scrollToTop() {
      document.body.scrollTop = 0; // Para navegadores Safari
      document.documentElement.scrollTop = 0; // Para outros navegadores
    }
  
    btnToTop.addEventListener("click", scrollToTop);
  });