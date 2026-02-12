document.addEventListener("DOMContentLoaded", function() {

    const intro = document.getElementById("intro");
    const btnIntro = document.getElementById("btnIntro");
    const invitacion = document.getElementById("invitacion");
    const mensaje = document.getElementById("mensaje");
    const btnSi = document.getElementById("btnSi");
    const btnNo = document.getElementById("btnNo");
    const escenaFinal = document.getElementById("escenaFinal");
    const musica = document.getElementById("musica");

    let tamañoSi = 1;

    function escribirTexto(texto, elemento) {
        elemento.textContent = "";
        let i = 0;

        function escribir() {
            if (i < texto.length) {
                elemento.textContent += texto.charAt(i);
                i++;
                setTimeout(escribir, 50);
            }
        }

        escribir();
    }

    btnIntro.addEventListener("click", () => {
        intro.style.display = "none";
        invitacion.style.display = "block";
        escribirTexto("¿Te gustaría ser mi cita este 14 de Febrero?", mensaje);
    });

    btnNo.addEventListener("mouseover", () => {
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 200 - 100;

        btnNo.style.position = "relative";
        btnNo.style.left = x + "px";
        btnNo.style.top = y + "px";

        tamañoSi += 0.2;
        btnSi.style.transform = `scale(${tamañoSi})`;
    });

    btnSi.addEventListener("click", () => {

        escribirTexto("Sabía que dirías que sí 💖", mensaje);

        musica.volume = 0;
        musica.play().catch(()=>{});

        let vol = 0;
        let fade = setInterval(() => {
            if (vol < 0.5) {
                vol += 0.02;
                musica.volume = vol;
            } else {
                clearInterval(fade);
            }
        }, 100);

        for (let i = 0; i < 20; i++) {
            let corazon = document.createElement("span");
            corazon.innerHTML = "💖";
            corazon.style.left = Math.random() * 100 + "vw";
            corazon.style.top = Math.random() * 100 + "vh";
            document.querySelector(".corazones").appendChild(corazon);

            setTimeout(() => corazon.remove(), 2000);
        }

        setTimeout(() => {
            invitacion.style.display = "none";
            escenaFinal.style.opacity = "1";
            escenaFinal.style.pointerEvents = "auto";
        }, 2500);
    });

});
