const add = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `O resultado: ${result}`;
}

const subtract = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 - num2;
  document.getElementById("result").innerText = `O resultado: ${result}`;
};

const multiply = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 * num2;
  document.getElementById("result").innerText = `O resultado: ${result}`;
};

const divide = () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  const result = num1 / num2;
  document.getElementById("result").innerText = `O resultado: ${result}`;
};