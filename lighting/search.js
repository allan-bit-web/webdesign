function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".content");
    let hasMatch = false; // Track if at least one match is found

    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(input) && input !== "") {
            item.style.display = "block"; // Show matching items
            hasMatch = true;
        } else {
            item.style.display = "none"; // Hide non-matching items
        }
    });

    // Show "No Results Found" message if nothing matches
    let noResultsMessage = document.getElementById("noResults");
    if (!hasMatch && input !== "") {
        if (!noResultsMessage) {
            noResultsMessage = document.createElement("div");
            noResultsMessage.id = "noResults";
            noResultsMessage.textContent = "No Results Found";
            noResultsMessage.style.color = "red";
            noResultsMessage.style.fontSize = "18px";
            document.getElementById("contentList").appendChild(noResultsMessage);
        }
    } else if (noResultsMessage) {
        noResultsMessage.remove();
    }
}