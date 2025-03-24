// CRUD Operations in LocalStorage for Inventory and Orders
const INVENTORY_KEY = "inventoryData";
const ORDERS_KEY = "ordersData";

// Get items from LocalStorage
function getItems() {
    return JSON.parse(localStorage.getItem(INVENTORY_KEY)) || [];
}

// Save items to LocalStorage
function saveItems(items) {
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(items));
}

// Add item to inventory
function addItemToStorage(item) {
    const items = getItems();
    items.push(item);
    saveItems(items);
}

// Get orders from LocalStorage
function getOrders() {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
}

// Save orders to LocalStorage
function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

// Add order to storage with item name
function addOrderToStorage(order) {
    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);
}

// Search order by item name
function searchOrderByItem(itemName) {
    const orders = getOrders();
    return orders.filter(order =>
        order.item.toLowerCase().includes(itemName.toLowerCase())
    );
}

// Delete item from storage
function deleteItemFromStorage(index) {
    const items = getItems();
    items.splice(index, 1);
    saveItems(items);
}
