document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple';
document.querySelector('.adv').remove();
const answer = prompt('Каково ваше отношение к технике apple?');
document.getElementById('prompt').textContent  = answer;