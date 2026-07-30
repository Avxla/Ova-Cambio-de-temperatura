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

}

function actualizarTermometro(celsius){

    const mercurio=document.querySelector(".mercurio");

    let porcentaje=(celsius+20)/120;

    porcentaje=Math.max(0,Math.min(1,porcentaje));

    mercurio.style.height=(porcentaje*100)+"%";

    if(celsius<10){

        mercurio.style.background="#2196F3";

    }

    else if(celsius<35){

        mercurio.style.background="#4CAF50";

    }

    else{

        mercurio.style.background="#F44336";

    }

}