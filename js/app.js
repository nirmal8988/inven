// Load inventory on page load
document.addEventListener("DOMContentLoaded", loadInventory);

// Add a new item
function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = document.getElementById("itemQuantity").value;
    const supplier = document.getElementById("supplier").value;

    if (itemName === "" || itemQuantity === "" || supplier === "") {
        alert("Please fill in all fields.");
        return;
    }

    const newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        supplier: supplier
    };

    addItemToStorage(newItem);
    loadInventory();
    clearForm();
}

// Load items to display in table
function loadInventory() {
    const items = getItems();
    const tableBody = document.querySelector("#inventoryTable tbody");
    tableBody.innerHTML = "";

    items.forEach((item, index) => {
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.supplier}</td>
                <td>
                    <button class="action-btn edit-btn" onclick="editItem(${index})">Edit</button>
                    <button class="action-btn delete-btn" onclick="deleteItem(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Edit an existing item
function editItem(index) {
    const items = getItems();
    const item = items[index];

    document.getElementById("itemName").value = item.name;
    document.getElementById("itemQuantity").value = item.quantity;
    document.getElementById("supplier").value = item.supplier;

    deleteItemFromStorage(index);
}

// Delete an item
function deleteItem(index) {
    if (confirm("Are you sure you want to delete this item?")) {
        deleteItemFromStorage(index);
        loadInventory();
    }
}

// Clear form inputs after adding or editing
function clearForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("supplier").value = "";
}
