
const $btn = document.getElementById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    renderHPLife: renderHPLife,
    renderProgressbar: renderProgressbar,
    changeHP: changeHP,
}

//test
function test(){
    console.log(this);
    console.log('This is ' + this.name + ' hp' + this.defaultHP);
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHPLife: renderHPLife,
    renderProgressbar: renderProgressbar,
    changeHP: changeHP,
}

$btn.addEventListener('click', function (){
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});

function init(){
    console.log('Start game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    person.renderHPLife();
    person.renderProgressbar();
}

function renderHPLife(){
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
}

function renderProgressbar(){
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count){
    if(this.damageHP < count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
   

    renderHP(this);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();













