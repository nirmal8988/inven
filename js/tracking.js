// Search orders by item name
function searchByItem() {
    const searchQuery = document.getElementById("searchInput").value.trim();
    if (searchQuery === "") {
        alert("Please enter an item name.");
        return;
    }

    const results = searchOrderByItem(searchQuery);
    displayResults(results);
}

// Display order tracking results
function displayResults(results) {
    const resultsContainer = document.getElementById("trackingResults");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No orders found matching your item name.</p>";
        return;
    }

    results.forEach(order => {
        const orderInfo = `
            <div class="order-info">
                <p><strong>Order ID:</strong> ${order.id}</p>
                <p><strong>Item:</strong> ${order.item}</p>
                <p><strong>Customer:</strong> ${order.customer}</p>
                <p><strong>Status:</strong> ${order.status}</p>
            </div>
        `;
        resultsContainer.innerHTML += orderInfo;
    });
}

// Go back to inventory system
function goBack() {
    window.location.href = "index.html";
}
