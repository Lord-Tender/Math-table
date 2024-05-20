function get() {
    let table = "";
    table += "<table>";
    for (a = 1; a <= col.value; a++) {
        table += "<tr>";
        for (b = 1; b <= row.value; b++) {
            if (operator.value == "Add") {
                table += `<td>${b} + ${a} = ${a + b}</td>`;
            }else if (operator.value == "Divide") {
                table += `<td>${b} ÷ ${a} = ${a / b}</td>`;
            }else if (operator.value == "Multiply") {
                table += `<td>${b} × ${a} = ${a * b}</td>`;
            }else if (operator.value == "Subtract") {
                table += `<td>${b} - ${a} = ${a - b}</td>`;
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    showResult.innerHTML = table;
}