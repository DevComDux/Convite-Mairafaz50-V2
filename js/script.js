(function () {

    const splash = document.getElementById('splash');
    const sc = document.getElementById('splashCounter');

    /* se já mostrou o splash nesta sessão */
    if (sessionStorage.getItem("splashJaMostrou")) {

        if (splash) splash.style.display = "none";

    } else {

        sessionStorage.setItem("splashJaMostrou", "true");

        let counter = 3;

        if (sc) {

            const i = setInterval(() => {

                counter--;
                sc.textContent = counter;

                if (counter <= 0) {
                    clearInterval(i);
                    if (splash) splash.style.display = "none";
                }

            }, 1000);

        }
    }

    const mainContent = document.querySelector('.main-content');

    if (sessionStorage.getItem("splashJaMostrou")) {

        if (mainContent) {
            mainContent.classList.add("fast");
        }

    }

    function updateCountdown() { 
        const target = new Date('2026-04-05T23:59:59'), now = new Date(), diff = target - now, el = document.getElementById('confirmCountdown'); 
        if (!el) return; 
        if (diff <= 0) { 
            el.innerHTML = '00d 00h 00m 00s'; return; 
        } 
        const d = Math.floor(diff / 86400000), h = Math.floor((diff % 86400000) / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000); 
        el.innerHTML = `${d.toString().padStart(2, '0')}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`; 
    }

    updateCountdown(); setInterval(updateCountdown, 1000);


    const audio = document.getElementById('bgAudio'), btn = document.getElementById('playPauseBtn'); 
    if (audio && btn) { 
        audio.volume = 0.5; 
        btn.addEventListener('click', () => { 
            if (audio.paused) { 
                audio.play().then(() => { 
                    btn.innerHTML = '<i class="fas fa-pause"></i>'; 
                }).catch(e => { }); 
            } else { 
                audio.pause(); 
                btn.innerHTML = '<i class="fas fa-play"></i>'; 
            } 
        }); 
    }
})();