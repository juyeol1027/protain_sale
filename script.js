function searchProduct() {
    const query = document.getElementById('search-input').value;
    const results = document.getElementById('search-results');
    results.innerHTML = `Searching for: ${query}`;
}