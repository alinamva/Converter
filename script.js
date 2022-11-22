let firstNum = document.querySelector('.first-num')
let secondNum = document.querySelector('.second-num')
let firstTd = document.querySelectorAll('.first-block td')
let secondTd = document.querySelectorAll('.second-block td')


function active() {
    firstTd.forEach(elements => {
        elements.addEventListener('click', () => {
            firstTd.forEach(x => x.classList.remove('active'));
            elements.classList.add('active');
        })
    })
    secondTd.forEach(elements => {
        elements.addEventListener("click", () => {
            secondTd.forEach(x => x.classList.remove('active'));
            elements.classList.add('active');
        })
    })
};
active();

let currency1 = firstNum.value;
window.innerHTML =  currency1






    
