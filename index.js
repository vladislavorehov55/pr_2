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

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden'
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.append(statusMessage);
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        let formData = new FormData(form);
        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj)
        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            }
            else if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            }
            else {
                statusMessage.innerHTML = message.failure;
            }
        });
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    })

    const form2 = document.getElementById('form');
    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        const obj ={};
        const inputs = form2.querySelectorAll('input');
        inputs.forEach(function(item) {
            obj[item.name] = item.value;
        });
        const request = new XMLHttpRequest();
        request.open('POST', 'server.php')
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(obj))
    })
})