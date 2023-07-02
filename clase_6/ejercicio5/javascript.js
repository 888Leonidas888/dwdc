function operationMath(num1, num2) {
  var operation = {
    sum: num1 + num2,
    sub: num1 - num2,
    mul: num1 * num2,
    div: num1 / num2,
  };

  return operation;
}

const BTN_OPE = formMath.btnOpe;

BTN_OPE.addEventListener("click", (e) => {
  e.preventDefault();
  let value1 = Number(formMath.num1.value);
  let value2 = Number(formMath.num2.value);

  if (value1 == "" || value2 == "") {
    alert("debe completar los campos");
  } else {
    let operation = operationMath(value1, value2);

    formMath.sum.value = operation.sum;
    formMath.sub.value = operation.sub;
    formMath.mul.value = operation.mul;
    formMath.div.value = operation.div;
  }
});
