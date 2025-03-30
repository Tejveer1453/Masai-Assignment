// Select Item 2
const item2 = document.getElementById("item2");

// Add click event listener
item2.addEventListener("click", function () {
  // Get parent node (UL)
  const parent = item2.parentNode;
  alert("Parent Node Content: " + parent.textContent.trim());

  // Get previous and next sibling elements
  const prevSibling = item2.previousElementSibling;
  const nextSibling = item2.nextElementSibling;

  // Log sibling text content
  if (prevSibling) console.log("Previous Sibling: " + prevSibling.textContent);
  if (nextSibling) console.log("Next Sibling: " + nextSibling.textContent);
});
