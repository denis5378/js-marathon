
function $getElById(id){
    return document.getElementById(id);
};
const $btn = $getElById('btn-kick');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-character'),
    elProgressbar: $getElById('progressbar-character'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbar: renderProgressbar,
};

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: $getElById('health-enemy'),
    elProgressbar: $getElById('progressbar-enemy'),
    renderHP: renderHP,
    changeHP: changeHP,
    renderHPLife: renderHPLife,
    renderProgressbar: renderProgressbar,
};

function makeCounter(){
    let count = 1;
    
    return function(){
        return count++;
    };
}
const counter = makeCounter();

$btn.addEventListener('click', function (){
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));

    let lessThen = 3;
    let countClick = counter();
    if (countClick < lessThen) {
        console.log(countClick)
    } else {
        console.log(countClick);
        $btn.disabled = true;
    };
});

function init(){
    console.log('Start game!');
    character.renderHP();
    enemy.renderHP();
};

function renderHP(){
    this.renderHPLife();
    this.renderProgressbar();
};

function renderHPLife(person){
    this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP;
};

function renderProgressbar(person){
    this.elProgressbar.style.width = this.damageHP + '%';
};

function changeHP(count){
    this.damageHP -= count;

    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    renderLog(this, log);

    if(this.damageHP <= 0){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    }

    this.renderHP();
};

function random(num){
    return Math.ceil(Math.random() * num);
};

function generateLog(firstPerson, secondPerson, damage){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage}, [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1];
};

function renderLog(pokemon, logs){
    const $logs = document.querySelector(pokemon === enemy ? '.enemy~#logs' : '.character~#logs');

    const $p = document.createElement('p');

    $p.innerText = logs;

    $logs.insertBefore($p, $logs.children[0]);
};

init();













