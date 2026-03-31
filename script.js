let previousInput = 0;
let currentInput = 0;
let operator = "";
//clear display function
function clearDisplay() {
    const displayDOM = document.getElementById("display");
    displayDOM.value = "";
    previousInput = 0;
    currentInput = 0;
    operator = "";
}

//calculator function
function Calculator() {
    const displayDOM = document.getElementById("display");
    // ลองคำนวณและเก็บไว้ในตัวแปร result ก่อน
    const result = Calculate(Number(previousInput), Number(currentInput), operator);

    console.log("previousInput =>", previousInput);
    console.log("currentInput  =>", currentInput);
    console.log("operator      =>", operator);
    console.log("Result        =>", result);

    // ✅ วิธีที่ถูกต้อง: ส่งค่าไปที่หน้าจอผ่าน .value
    displayDOM.value = result;


    currentInput = result;
    previousInput = "";

}

function setCurrentInput(e) {
    const displayDOM = document.getElementById("display");
    displayDOM.value += e.target.value;

    if (operator && displayDOM.value.includes(operator)) {
        displayDOM.value = e.target.value;
        previousInput = currentInput;
    }
    currentInput = displayDOM.value;
}

function setOperator(e) {
    const displayDOM = document.getElementById("display");
    displayDOM.value = e.target.value;
    operator = e.target.value;
}
function Calculate(a, b, operator) {
    let result = 0;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b != 0) {
                result = a / b;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
    }return result;
}
