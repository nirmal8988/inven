// CRUD Operations in LocalStorage
const STORAGE_KEY = "inventoryData";

// Get all items from LocalStorage
function getItems() {
    const items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return items;
}

// Save items to LocalStorage
function saveItems(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// Add a new item
function addItemToStorage(item) {
    const items = getItems();
    items.push(item);
    saveItems(items);
}

// Update an item by index
function updateItemInStorage(index, updatedItem) {
    const items = getItems();
    items[index] = updatedItem;
    saveItems(items);
}

// Delete an item by index
function deleteItemFromStorage(index) {
    const items = getItems();
    items.splice(index, 1);
    saveItems(items);
}
