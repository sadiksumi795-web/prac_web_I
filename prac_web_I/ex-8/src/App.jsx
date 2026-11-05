import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 499, category: "Clothing" },
  { id: 2, name: "Jeans", price: 999, category: "Clothing" },
  { id: 3, name: "Headphones", price: 1499, category: "Electronics" },
  { id: 4, name: "Keyboard", price: 799, category: "Electronics" },
];

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <main>
      <h1>Product Catalogue</h1>

      <label htmlFor="category">Filter by category: </label>
      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> — ₹{product.price} (
            {product.category})
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;