const display =document.querySelector(".display");
const buttons =document.querySelectorAll("button");
const speChar=["%", "*", "/", "-", "+", "="];
const equalButton=document.querySelector('.equal');
let output = "";


const calculate =(btnvalue) => {
    display.focus();
    if (btnvalue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = "";
    } else if (btnvalue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && speChar.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};


buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

equalButton.addEventListener('click', function() {
        try {
            const result = eval(display.value);
            if (isNaN(result) || !isFinite(result)) {
                display.value = 'Invalid Expression';
            } else {
                display.value = result;
            }
        } catch (error) {
            display.value = 'Invalid Expression';
        }
    });

