$(document).ready(function(){

// Menú Navegación

var activo = true;

$(".btn-menu").click(function(){

    $(".btn-menu i").toggleClass('fa-times');

    if(activo){
        $(".lista-contenedor").animate({left:'0px'},500);
        activo = false;
    }
    else{
        $(".lista-contenedor").animate({left:'-100%'},500);
        activo = true;
    }

});


// Intercalar Clase "Activo" Enlaces menú de navegación

var enlaces  = document.querySelectorAll(".lista li a");

enlaces.forEach((element) => {
    element.addEventListener("click",(event) => {

        enlaces.forEach((a) =>{
            a.classList.remove("activo");
        });

        event.target.classList.add("activo");
    });
});


// Scroll Efect
var  prevScrollPos = window.pageYOffset;

window.onscroll = () =>{

    // Ocultar y Mostrar menú al hacer scroll
    var  currentScrollPos = window.pageYOffset;

    if(prevScrollPos > currentScrollPos){
        $(".menu").css("top","0px");
        $(".menu").css("transition","0.5s");   
    }
    else{
        $(".menu").css("top","-60px");
        $(".menu").css("transition","0.5s");          
    }

    prevScrollPos = currentScrollPos;

    // Condiciones
    var posicion = window.pageYOffset;

    if(posicion <= 600){
        //Ocultar Estilos Menu Scroll
        $(".menu").css("borderBottom","none");

        //Ocultar Arriba
        $(".go-top").css("right","-100%");
    }
    else{
        //Mostrar Estilos Menu Scroll
        $(".menu").css("borderBottom","3px solid #ff2e63");   
        
        //Mostrar ir Arriba
        $(".go-top").css("right","0");
        $(".go-top").css("transition","500ms");
    }

}


// Función ir arriba

$(".go-top").click(function(){
    $("body, html").animate({
        scrollTop:"0"
    },500);
});

// Función ir abajo

$("#abajo").click(function(){
    $("body, html").animate({
        scrollTop:"600px"
    },500);
});

// Scroll Menú de Navegación

$("#inicio").click(function(){
    $("html,body").animate({scrollTop:$(".bienvenido").offset().top},2000);
});

$("#nosotros").click(function(){
    $("html,body").animate({scrollTop:$(".info-container").offset().top},2000);
    $(".lista-contenedor").animate({left:'-100%'},500);
    scrollNavegacionAnimate();
});

$("#proyectos").click(function(){
    $("html,body").animate({scrollTop:$(".project-title").offset().top},2000);
    $(".lista-contenedor").animate({left:'-100%'},500);
    scrollNavegacionAnimate();
});

$("#blog").click(function(){
    $("html,body").animate({scrollTop:$(".card-testimonio").offset().top},2000);
    $(".lista-contenedor").animate({left:'-100%'},500);
    scrollNavegacionAnimate();
});

$("#contacto").click(function(){
    $("html,body").animate({scrollTop:$(".footer-title").offset().top},2000);
    $(".lista-contenedor").animate({left:'-100%'},500);
    scrollNavegacionAnimate();
});

var scrollNavegacionAnimate =  function () {
    $(".btn-menu i").toggleClass('fa-times');
    activo = true;
}


// Mostrar contenido en la seccion "Acerca de Nosotros"


var activo = true;

$("#btn-nosotros").click(function(){

    if(activo)
    {
        $("#texto-oculto").fadeIn(1000);
        $("#btn-nosotros").text("Leer Menos");
        activo = false;
    }
    else
    {
        $("#texto-oculto").fadeOut(1000);
        $("#btn-nosotros").text("Leer Más");
        activo = true;        
    }


});



// Validar Formulario

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos ={
    _usuario : false,
    _correo : false,
    _contenido : false
}

var inputs = $("#formulario input");

$("#btn-enviar").click(function(e){
    e.preventDefault();

    // Validar Formulario 
    if(campos._usuario && campos._correo && campos._contenido){
        alert("Datos enviados correctamente");
        $("#formulario").reset;
        $("#user").val("");
        $("#email").val("");
        $("#message").val("");
        $("#user").removeClass("formulario-content-activo");
        $("#email").removeClass("formulario-content-activo");
        $("#message").removeClass("formulario-content-activo");
    }
    else{
        alert("Por favor Complete todos los campos obligatorios")
    }
});


// Validar Inputs del formulario

inputs.each(function(){
    $(this).keyup(function(e){

        var usuario =  $("#user").val();
        var correo = $("#email").val();

        switch(e.target.name){
            case "user":
                if(expresiones.nombre.test(usuario)){
                    $("#user").addClass("formulario-content-activo");
                    $("#user").removeClass("formulario-content-inactivo");
                    campos._usuario = true;
                }
                else{
                    $("#user").removeClass("formulario-content-activo");
                    $("#user").addClass("formulario-content-inactivo");
                    campos._usuario = false;
                }
            break;
            
            case "email":
                if(expresiones.correo.test(correo)){
                    $("#email").addClass("formulario-content-activo");
                    $("#email").removeClass("formulario-content-inactivo");
                    campos._correo = true;
                }
                else{
                    $("#email").removeClass("formulario-content-activo");
                    $("#email").addClass("formulario-content-inactivo");
                    campos._correo = false;
                }
            break;
        
        }
    });

});

// Validar TextArea
$("#message").keyup(function(){
    var contenido = $("#message").val();

    if(contenido !== ""){
        $("#message").addClass("formulario-content-activo");
        $("#message").removeClass("formulario-content-inactivo");
        campos._contenido = true;
    }
    else{
        $("#message").removeClass("formulario-content-activo");
        $("#message").addClass("formulario-content-inactivo");
        campos._contenido = false;
    }

});

});








