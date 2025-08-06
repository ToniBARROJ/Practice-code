let number = 1;


function helloWorld () {
    document.getElementById("message").innerText = "Hello World!";
    }

function byeWorld () {
    document.getElementById("message").innerText = "";
}

function addHello () {
    const container = document.getElementById("container");
    const newparagraph = document.createElement("p");
    newparagraph.innerText = "Hello World! " + number;
    container.appendChild(newparagraph);
    number++;
}

function addProduct() {
    // Get the input values
    const productName = document.getElementById("name").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    // Validate the input
    if (!productName || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
        alert("Por favor, introduce valores válidos.");
        return;
    }

    // Calculate total for this product
    const total = quantity * price;

    // Create a new row for the product list
    const productContainer = document.getElementById("productContainer");
    const row = document.createElement("tr");
    row.setAttribute("draggable", "true");
    row.addEventListener("dragstart", dragStart);
    row.addEventListener("dragover", dragOver);
    row.addEventListener("drop", drop);

    // Add the product details to the row
    row.innerHTML = `
        <td>${productName}</td>
        <td>${quantity}</td>
        <td>$${price.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td>
        <td><button onclick="removeProduct(this)">Eliminar</button></td>
    `;

    // Append the row to the product list
    productContainer.appendChild(row);

    // Clear the input fields
    document.getElementById("name").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("price").value = '';
}

function removeProduct(button) {
    // Remove the row that contains the button
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
// Sorting Function
function sortTable(columnIndex) {
    const table = document.getElementById("productContainer");
    const rows = Array.from(table.querySelectorAll("tr"));
    let ascending = true;

    rows.sort((a, b) => {
         const cellA = a.cells[columnIndex].innerText;
        const cellB = b.cells[columnIndex].innerText;

        if (!isNaN(cellA) && !isNaN(cellB)) {
            return ascending ? cellA - cellB : cellB - cellA;
        }

        return ascending
            ? cellA.localeCompare(cellB)
            : cellB.localeCompare(cellA);
    });

    // Remove existing rows and re-add sorted rows
    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));
}

// Drag-and-drop functions
let draggedRow = null;

function dragStart(event) {
    draggedRow = event.target;
    event.dataTransfer.setData("text/html", draggedRow);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (event.target.tagName === "TD") {
        const targetRow = event.target.parentNode;
        const productContainer = document.getElementById("productContainer");
        productContainer.insertBefore(draggedRow, targetRow.nextSibling);
    }
    draggedRow = null;
}

