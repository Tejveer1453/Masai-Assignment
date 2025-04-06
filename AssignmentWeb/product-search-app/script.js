async function fetchProducts() {
  const category = document.getElementById("category").value;
  const minPrice = document.getElementById("min-price").value;
  const maxPrice = document.getElementById("max-price").value;
  const status = document.getElementById("status");
  const productsDiv = document.getElementById("products");

  // Clear previous data
  status.textContent = "Loading...";
  productsDiv.innerHTML = "";

  // Construct URL
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (minPrice) params.append("min_price", minPrice);
  if (maxPrice) params.append("max_price", maxPrice);
  params.append("sort", "asc");

  const url = `https://mockapi.io/products?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Failed to fetch products.");

    const data = await response.json();

    if (data.length === 0) {
      status.textContent = "No products found.";
      return;
    }

    status.textContent = "";
    data.forEach((product) => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        `;
      productsDiv.appendChild(div);
    });
  } catch (error) {
    status.textContent = "Error loading products.";
    console.error(error);
  }
}
