const arrow = document.querySelectorAll(".row")
const item = document.querySelectorAll(".main__list--faq")
const answerText = document.querySelectorAll(".answers")
const questions = document.querySelectorAll(".questions__text")


    /*for(let i = 0; i < answers.length; i++){
        item[i].addEventListener("click", () => {
            answerText[i].classList.toggle("active")
            arrow[i].classList.toggle("row-rotate")
            questions[i].classList.toggle("text-bold")
        })
    }*/


    item.forEach(el => {
        el.addEventListener("click", () => {
            el.querySelector(".answers").classList.toggle("active")
            el.querySelector(".row").classList.toggle("row-rotate")
            el.querySelector(".questions__text").classList.toggle("text-bold")
        })
    });