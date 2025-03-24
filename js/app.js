// Load data on page load
document.addEventListener("DOMContentLoaded", function () {
    loadInventory();
    loadOrders();
});

/** ===== Inventory Management ===== */

// Add new item and auto-create an order
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

    // Add item to storage
    addItemToStorage(newItem);
    loadInventory();
    clearForm();

    // Automatically create an order for this item
    addOrder(itemName);
}

// Load inventory items
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
                    <button class="action-btn delete-btn" onclick="deleteItem(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Delete item and its order
function deleteItem(index) {
    deleteItemFromStorage(index);
    loadInventory();
}

// Clear form inputs
function clearForm() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("supplier").value = "";
}

/** ===== Order Management ===== */

// Add a new order linked with the item
function addOrder(itemName) {
    const newOrder = {
        id: Date.now(),
        item: itemName,
        customer: "N/A",
        status: "Pending"
    };

    addOrderToStorage(newOrder);
    loadOrders();
}

// Load orders to display
function loadOrders() {
    const orders = getOrders();
    const ordersTableBody = document.querySelector("#ordersTable tbody");
    ordersTableBody.innerHTML = "";

    orders.forEach((order, index) => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.item}</td>
                <td>${order.customer}</td>
                <td>${order.status}</td>
                <td>
                    <button class="action-btn delete-btn" onclick="deleteOrder(${index})">Delete</button>
                </td>
            </tr>
        `;
        ordersTableBody.innerHTML += row;
    });
}

// Delete order
function deleteOrder(index) {
    deleteOrderFromStorage(index);
    loadOrders();
}
