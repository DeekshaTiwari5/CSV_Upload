document.addEventListener("DOMContentLoaded", function () {
  // Get references to the search input and table
  const searchInput = document.getElementById("search-input");
  const table = document.querySelector("table");
  // console.log('Im in');

  document.getElementById("go").addEventListener("click", searchTable);

  function searchTable() {
    // Get the input value and convert it to lowercase
    const input = searchInput.value.toLowerCase();

    // Get all table rows and iterate through them
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      // Get the text content of each row and convert it to lowercase
      const rowText = rows[i].textContent.toLowerCase();

      // If the input value is found in the row text, highlight the row
      if (rowText.includes(input)) {
        rows[i].classList.add("highlight");
      } else {
        rows[i].classList.remove("highlight");
      }
    }
  }
});



