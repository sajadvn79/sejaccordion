let mybutton = document.querySelectorAll(".accordion");


mybutton.forEach((element) => {
  
  element.addEventListener("click", function () {
    let data = document.querySelectorAll(".panel")
    data.forEach(element => {
      element.classList.add("d-none");
    });
  
    let panel = this.nextElementSibling;
    panel.classList.toggle("d-none");
  
  });


});
