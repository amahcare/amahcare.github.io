
  toast = document.querySelector(".toast");
  closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");
  
  const check = document.querySelector(".check");
  var to = document.getElementById("toast");
  var txttipo = document.getElementById("txtTipo");
  var txtnota = document.getElementById("txtNota");
  let timer1, timer2;
  
  function showToast(tipo, nota){
  
    toast.classList.add("active");
    progress.classList.add("active");
  
    
    txtnota.innerHTML = nota;
  
    if(tipo == "success"){
      check.classList.remove("red", "orange", "blue", "fa-times", "fa-exclamation-triangle", "fa-info");
      check.classList.add("green", "fa-check");
      to.style.display = 'block';
    }
  
    if(tipo == "error"){
      check.classList.remove("green", "orange", "blue", "fa-check", "fa-exclamation-triangle", "fa-info");
      check.classList.add("red", "fa-times");
        to.style.display = 'block';
    }
  
    if(tipo == "info"){
      check.classList.remove("green", "orange", "red", "fa-check", "fa-times", "fa-exclamation-triangle");
      check.classList.add("blue", "fa-info");
      to.style.display = 'block';
    }
  
    if(tipo == "warning"){
      check.classList.remove("green", "blue", "red", "fa-check", "fa-times", "fa-info");
      check.classList.add("orange", "fa-exclamation-triangle");
      to.style.display = 'block';
    }
  
    timer1 = setTimeout(() => {
      toast.classList.remove("active");
    }, 5000); //1s = 1000 milliseconds
  
    timer2 = setTimeout(() => {
      progress.classList.remove("active");
      to.style.display = 'none';
    }, 5300);
  }
  
  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    to.style.display = 'none';
    setTimeout(() => {
     
      progress.classList.remove("active");
  
    }, 300);
  
    clearTimeout(timer1);
    clearTimeout(timer2);
  });
  //# sourceURL=pen.js
