console.log("Hello World");

// START OF FILTER CODE FOR CAREERS PAGE
document.addEventListener('DOMContentLoaded', (event) => {
    const filterOptions = document.getElementById("filterOptions");
    applyFilter('all'); // Apply the default filter on page load
  
    filterOptions.addEventListener("change", function() {
      applyFilter(this.value);
    });
  
    function applyFilter(option) {
      var jobItems = Array.from(document.querySelectorAll(".jobS"));
  
      if (option === 'clear' || option === 'all') {
        option = 'newest'; // Default state: All Experience, Newest to Oldest
      }
  
      if (option === "newest") {
        jobItems.sort((a, b) =>
          b.getAttribute("data-start-date").localeCompare(a.getAttribute("data-start-date")));
      } else if (option === "oldest") {
        jobItems.sort((a, b) =>
          a.getAttribute("data-start-date").localeCompare(b.getAttribute("data-start-date")));
      }
  
      jobItems.forEach((item) => {
        if ((option === "professional" && item.getAttribute("data-category") !== "professional") ||
            (option === "education" && item.getAttribute("data-category") !== "education")) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
  
      // Re-append items to main in sorted order
      const main = document.querySelector("main");
      jobItems.forEach((item) => main.appendChild(item));
    }
  });
  
// END OF FILTER CODE FOR CAREERS PAGE