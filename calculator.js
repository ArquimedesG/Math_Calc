function sumar (a,b) {
    return a + b;
}
function restar (a,b) {
    return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) throw new Error("Division by zero not allowed");
  return a / b;
}