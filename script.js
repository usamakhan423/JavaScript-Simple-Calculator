function calc() {
    const display = document.querySelector("#input");
    const clearScreen = document.querySelector("#clearScreen");
    const btns = document.querySelectorAll(".btn");
    const equalTo = document.querySelector("#equalTo");

    btns.forEach(function(btn) {
        btn.addEventListener("click", (e) => {
            let value = e.target.dataset.num;
            display.value += value;
        })
    })
    equalTo.addEventListener("click", (e) => {
        if(display.value === '') {
            display.value = "";
        } else {
            let answer = eval(display.value);
            display.value = answer;
        }
    })
    clearScreen.addEventListener("click", () => {
        display.value = '';
        display.style.color = "#eee";
    })
}
calc();



