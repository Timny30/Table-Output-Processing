const table1Data = [
    ["Index #", "Value"],
    ["A1", 41], ["A2", 18], ["A3", 21], ["A4", 63], ["A5", 2],
    ["A6", 74], ["A7", 1], ["A8", 86], ["A9", 94], ["A10", 92],
    ["A11", 71], ["A12", 27], ["A13", 10], ["A14", 72], ["A15", 16],
    ["A16", 20], ["A17", 67], ["A18", 47], ["A19", 71], ["A20", 28]
];

const table1 = document.getElementById("table1");
table1Data.forEach((row, i) => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
        const el = document.createElement(i === 0 ? "th" : "td");
        el.textContent = cell;
        tr.appendChild(el);
    });
    table1.appendChild(tr);
});

const values = {};
for (let i = 1; i < table1Data.length; i++) {
    values[table1Data[i][0]] = table1Data[i][1];
}

const alpha = values["A5"] + values["A20"];
const beta = values["A15"] / values["A7"];
const charlie = values["A13"] * values["A12"];

const table2Body = document.querySelector("#table2 tbody");
[["Alpha", alpha], ["Beta", beta], ["Charlie", charlie]].forEach(([cat, val]) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${cat}</td><td>${val}</td>`;
    table2Body.appendChild(tr);
});