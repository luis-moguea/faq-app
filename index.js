const row = document.querySelectorAll(".row")
const answers = document.querySelectorAll(".main__list--faq")
const answerText = document.querySelectorAll(".answers")
const questions = document.querySelectorAll(".questions__text")


    for(let i = 0; i < answers.length; i++){
        answers[i].addEventListener("click", () => {
            answerText[i].classList.toggle("active")
            row[i].classList.toggle("row-rotate")
            questions[i].classList.toggle("text-bold")
        })
    }



