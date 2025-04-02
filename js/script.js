const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
});





// codigo de scroll circular

document.addEventListener("DOMContentLoaded", function () {
    const btnIrArriba = document.getElementById("btn-ir-arriba");

    // Mostrar el botón cuando el usuario se desplaza hacia abajo
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnIrArriba.style.display = "flex";
        } else {
            btnIrArriba.style.display = "none";
        }
    });

    // Acción para ir arriba
    btnIrArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// codigo complemento de scroll circular -puede ir aqui o directo el html hasta el final 

  function $(query)
  {
    return document.querySelector(query);
  }
  
  function getSource(n)
  {
    return "conic-gradient(var(--theme) "+n+"%, rgb(210,230,250) "+n+"%)";
  }
  
  window.onscroll=(ev)=>{
  const scroll = Math.round(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight)*100);
  
  $("#scroll-circular").style.background=getSource(scroll);
  
  $("#percent").innerHTML=scroll+"%";
  }
   

// Obtener los elementos del modal y el botón
  //NOTA: podemos envolver el script en un window.onload o agregar un DOMContentLoaded para asegurar que el DOM esté completamente cargado antes de ejecutar el código.

window.onload = function () {
  // Obtener los elementos del modal y el botón
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Función para abrir el modal
  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block"; // Muestra el modal
  });

  // Función para cerrar el modal cuando se hace clic en el botón de cierre
  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Oculta el modal
  });

  // Cerrar el modal si se hace clic fuera del contenido del modal
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none"; // Si se hace clic fuera del modal, se cierra
    }
  });
};

