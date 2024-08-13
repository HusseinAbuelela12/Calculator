let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let arr = Array.from(buttons);
console.log(arr)
let output = "";

arr.forEach((button) => {
    button.addEventListener("click" , (e) => {
        if (e.target.innerHTML == "=") {
            output = eval(output);
            display.value = output;
        }else if (e.target.innerHTML == "AC") {
            output = "";
            display.value = output;
        }else if (e.target.innerHTML == "DEL") {
            output = output.toString().slice(0,-1);
            display.value = output;
        }else {
            output += e.target.innerHTML;
            display.value = output;
        }
    });
});