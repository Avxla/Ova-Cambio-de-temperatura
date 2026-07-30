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
function actualizarTermometro(celsius){

    const mercurio = document.querySelector(".mercurio");

    celsius = Math.max(0, Math.min(100, celsius));

    // Altura del tubo (sin el bulbo)
    const alturaTubo = 270; // píxeles

    // Altura que siempre ocupa el bulbo
    const alturaBulbo = 60; // píxeles

    const altura = alturaBulbo + (celsius / 100) * alturaTubo;

    mercurio.style.height = altura + "px";

    document.getElementById("temperaturaActual").textContent =
        celsius.toFixed(1) + " °C";


    if(celsius < 10){

        mercurio.style.background =
        "linear-gradient(to top,#1565C0,#42A5F5,#90CAF9)";

    }else if(celsius < 30){

        mercurio.style.background =
        "linear-gradient(to top,#43A047,#81C784,#A5D6A7)";

    }else{

        mercurio.style.background =
        "linear-gradient(to top,#E53935,#EF5350,#FF8A80)";

    }

    document.getElementById("temperaturaActual").textContent =
    celsius.toFixed(1) + " °C";
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

    else if(celsius<28){

        mensaje.innerHTML=
        "😊 <strong>Templada.</strong><br>Es una temperatura agradable para la mayoría de las personas.";

    }

    else if(celsius<35){

        mensaje.innerHTML=
        "☀️ <strong>Cálida.</strong><br>Es recomendable mantenerse hidratado.";

    }

    else{

        mensaje.innerHTML=
        "🔥 <strong>Muy caliente.</strong><br>Evita la exposición prolongada al sol y mantente hidratado.";

    }

}

