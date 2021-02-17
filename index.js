document.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };
    info.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (event.target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });
    let deadline = '2021-02-20';
    function getTimeRemainig(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t/(1000*60*60)));
        return {t, seconds, minutes, hours}
    }
    function setClock(id, endtime) {
        
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        function updateClock() {
            let t = getTimeRemainig(endtime);
            hours.textContent = t.hours >= 10 ? t.hours : `0${t.hours}`;
            minutes.textContent = t.minutes >= 10 ? t.minutes : `0${t.minutes}`;
            seconds.textContent = t.seconds >= 10 ? t.seconds : `0${t.seconds}`;
            if (t.total <= 0) {
                clearInterval(timerId)
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
        const timerId = setInterval(updateClock, 1000);
    };
    setClock('timer', deadline);
})