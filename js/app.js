console.log("OVA iniciado correctamente.");
function mostrarEscala(nombre, boton){

    const escalas=document.querySelectorAll(".escala");

    escalas.forEach(e=>{

        e.classList.add("oculto");

    });

    document.getElementById(nombre).classList.remove("oculto");

    const botones=document.querySelectorAll(".botones button");

    botones.forEach(b=>{

        b.classList.remove("activo");

    });

    boton.classList.add("activo");

}

function mostrarConversion(id, boton){

    const conversiones=document.querySelectorAll(".conversion");

    conversiones.forEach(c=>{

        c.classList.add("oculto");

    });

    document.getElementById(id).classList.remove("oculto");

    const botones=document.querySelectorAll(".botones-conversion button");

    botones.forEach(b=>{

        b.classList.remove("activo-conversion");

    });

    boton.classList.add("activo-conversion");

}

function activarCuriosidad(tarjeta){

    tarjeta.classList.toggle("activa");

}
function convertirTemperatura(){

    const temperatura =
        parseFloat(document.getElementById("temperatura").value);

    const escala =
        document.getElementById("escala").value;

    if(isNaN(temperatura)){

        alert("Ingrese una temperatura válida.");

        return;

    }

    let celsius;
    let fahrenheit;
    let kelvin;

    switch(escala){

        case "celsius":

            celsius=temperatura;
            fahrenheit=(temperatura*9/5)+32;
            kelvin=temperatura+273.15;

        break;

        case "fahrenheit":

            fahrenheit=temperatura;
            celsius=(temperatura-32)*5/9;
            kelvin=celsius+273.15;

        break;

        case "kelvin":

            kelvin=temperatura;
            celsius=temperatura-273.15;
            fahrenheit=(celsius*9/5)+32;

        break;

    }

    document.getElementById("resultadoCelsius").textContent=
    celsius.toFixed(2)+" °C";

    document.getElementById("resultadoFahrenheit").textContent=
    fahrenheit.toFixed(2)+" °F";

    document.getElementById("resultadoKelvin").textContent=
    kelvin.toFixed(2)+" K";

    actualizarTermometro(celsius);
    
  interpretarTemperatura(celsius);

}

function calificarEvaluacion(){

    let nota = 0;

    if(document.querySelector('input[name="p1"]:checked')?.value=="b") nota++;

    if(document.querySelector('input[name="p2"]:checked')?.value=="b") nota++;

    if(document.querySelector('input[name="p3"]:checked')?.value=="c") nota++;

    if(document.querySelector('input[name="p4"]:checked')?.value=="a") nota++;

    if(document.querySelector('input[name="p5"]:checked')?.value=="a") nota++;

    let mensaje="";

    if(nota==5){

        mensaje="¡Excelente! Dominas completamente el tema.";

    }

    else if(nota>=3){

        mensaje="Buen trabajo. Continúa practicando.";

    }

    else{

        mensaje="Debes repasar nuevamente el contenido.";

    }

    document.getElementById("resultadoEvaluacion").innerHTML=

    "<h2>Puntaje: "+nota+"/5</h2><br>"+mensaje;

}

function mostrarEvaluacion(event){

    event.preventDefault();

    const evaluacion = document.getElementById("evaluacion");

    evaluacion.classList.toggle("mostrar");

    if(evaluacion.classList.contains("mostrar")){

        evaluacion.scrollIntoView({

            behavior:"smooth"

        });

    }

}
function actualizarTermometro(celsius){

    celsius = Math.max(0,Math.min(100,celsius));

    const tubo = document.getElementById("mercurioTubo");

    tubo.style.height = (celsius * 2.5) + "px";

    document.getElementById("temperaturaActual").textContent =
        celsius.toFixed(1) + " °C";

    let color;

    if(celsius<20){

        color="linear-gradient(to top,#1565C0,#42A5F5,#90CAF9)";

    }

    else if(celsius<50){

        color="linear-gradient(to top,#43A047,#81C784,#A5D6A7)";

    }

    else{

        color="linear-gradient(to top,#E53935,#EF5350,#FF8A80)";

    }

    tubo.style.background=color;

    document.querySelector(".mercurio-bulbo").style.background=color;

}

function calcularConversion(){

    const valor = parseFloat(document.getElementById("valorConvertir").value);

    const origen = document.getElementById("escalaOrigen").value;

    const destino = document.getElementById("escalaDestino").value;

    if(isNaN(valor)){

        alert("Ingrese una temperatura.");

        return;

    }

    let celsius;

    switch(origen){

        case "celsius":
            celsius = valor;
        break;

        case "fahrenheit":
            celsius = (valor-32)*5/9;
        break;

        case "kelvin":
            celsius = valor-273.15;
        break;

    }

    let resultado;

    switch(destino){

        case "celsius":
            resultado = celsius;
        break;

        case "fahrenheit":
            resultado = (celsius*9/5)+32;
        break;

        case "kelvin":
            resultado = celsius+273.15;
        break;

    }

    document.getElementById("resultadoCalculadora").textContent =
        resultado.toFixed(2);

}


function interpretarTemperatura(celsius){

    const mensaje=document.getElementById("mensajeTemperatura");

    if(celsius<0){

        mensaje.innerHTML=
        "🥶 <strong>Muy fría.</strong><br>El agua puede congelarse y existe riesgo de formación de hielo.";

    }

    else if(celsius<15){

        mensaje.innerHTML=
        "❄️ <strong>Fría.</strong><br>Se recomienda usar ropa abrigada.";

    }

    else if(celsius<35){

        mensaje.innerHTML=
        "😊 <strong>Templada.</strong><br>Es una temperatura agradable para la mayoría de las personas.";

    }

    else if(celsius<50){

        mensaje.innerHTML=
        "☀️ <strong>Cálida.</strong><br>Es recomendable mantenerse hidratado.";

    }

    else{

        mensaje.innerHTML=
        "🔥 <strong>Muy caliente.</strong><br>Evita la exposición prolongada al sol y mantente hidratado.";

    }

}

