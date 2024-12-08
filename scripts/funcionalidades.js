const compareNumbers = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const output = document.getElementById("outputIf");
  
    output.textContent = (num1 > num2) ? `El número mayor es: ${num1}` :
                         (num2 > num1) ? `El número mayor es: ${num2}` :
                         "Ambos números son iguales.";
};
  
const showMonth = () => {
    const month = Number(document.getElementById("monthInput").value);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    alert(months[month - 1] || 'Número inválido.');
};

const addName = () => {
    const nameInput = document.getElementById("nameInput").value;
    const nameList = document.getElementById("nameList");
    const entry = document.createElement("p");
    entry.textContent = nameInput;
    nameList.appendChild(entry);
};

document.getElementById("compareBtn").addEventListener("click", compareNumbers);
document.getElementById("monthBtn").addEventListener("click", showMonth);
document.getElementById("addNameBtn").addEventListener("click", addName);