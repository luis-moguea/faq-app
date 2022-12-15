const row = document.querySelector("#row")
const answer = document.querySelector("#answer")
const answerTwo = document.querySelector("#answer-1")


    row.addEventListener("click", () => {
        answer.classList.toggle("text")
        row.classList.toggle("row-rotate")
    })



