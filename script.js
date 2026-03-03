// Cambio de horario automatico en la parte de contancto

function comprobarHorario() {
        const fecha = new Date();
        const dia = fecha.getDay();
        const hora = fecha.getHours();
        
        let estado = "Cerrado ahora";
        let color = "#c05a3e";

        if (dia >= 1 && dia <= 5) { 
            // Abierto de 8:00 a 16:59
            if (hora >= 8 && hora < 17) {
                estado = "Abierto ahora";
                color = "#2e7d32";
            }
        } 
        else if (dia === 6) { 
            // Abierto de 8:00 a 15:59
            if (hora >= 8 && hora < 16) {
                estado = "Abierto ahora";
                color = "#2e7d32";
            }
        }

        const elementoTexto = document.getElementById("texto-estado-horario");
        if (elementoTexto) {
            elementoTexto.innerText = estado;
            elementoTexto.style.color = color;
        }
    }

    comprobarHorario();

    setInterval(comprobarHorario, 10000);


