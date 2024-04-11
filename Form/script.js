const form = document.querySelector("#form");
const resultTable = document.querySelector("#table");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const age = document.querySelector("#age").value;

    const newRow = document.createElement("tr");
          
    const no = document.createElement("td");
    no.textContent = resultTable.rows.length ; 
    newRow.appendChild(no);

    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const surnameCell = document.createElement("td");
    surnameCell.textContent = surname;
    newRow.appendChild(surnameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = age;
    newRow.appendChild(ageCell);
    alert("Məlumat yadda saxlanıldı!");


    const operationCell = document.createElement("td");
    const saveButton = document.createElement("button");
    saveButton.textContent = "Yadda saxla";
    saveButton.type = "button";
    saveButton.addEventListener("click", (event) => {

        alert("Məlumat yadda saxlanıldı!");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ləğv et";
    deleteButton.type = "button";

    operationCell.appendChild(deleteButton);
    operationCell.appendChild(saveButton);
    newRow.appendChild(operationCell);

    resultTable.appendChild(newRow);
});