import React, { useState } from "react";
import demo from "./demo.avif";
import demo2 from "./demo2.jpeg";
const ProductList = () => {
  const [products, setProducts] = useState([
    {
      image: demo,
      title: "good dog",
      description: "He is a good boy",
      price: 100,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "very good dog",
      description: "Even better boy",
      price: 200,
      category: "Category 2",
    },
    {
      image: demo,
      title: "corgi",
      description: "This is product 1",
      price: 10,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "cavapoo",
      description: "This is product 1",
      price: 30,
      category: "Category 2",
    },
    {
      image: demo,
      title: "corgi",
      description: "This is product 1",
      price: 450,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "cavapoo",
      description: "This is product 1",
      price: 3090,
      category: "Category 2",
    },
    {
      image: demo,
      title: "corgi",
      description: "This is product 1",
      price: 400,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "cavapoo",
      description: "This is product 1",
      price: 300,
      category: "Category 2",
    },
    {
      image: demo,
      title: "corgi",
      description: "This is product 1",
      price: 300,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "cavapoo",
      description: "This is product 1",
      price: 400,
      category: "Category 2",
    },
    {
      image: demo,
      title: "corgi",
      description: "This is product 1",
      price: 200,
      category: "Category 1",
    },
    {
      image: demo2,
      title: "cavapoo",
      description: "This is product 1",
      price: 300,
      category: "Category 2",
    },
  ]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("price");
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const filteredProducts = products.filter((product) =>
    product.title.includes(filter)
  );
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "price") {
      return a[sort] - b[sort];
    } else {
      return a[sort].localeCompare(b[sort]);
    }
  });
  const paginatedProducts = sortedProducts.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );

  const renderProduct = (product, index) => (
    <div
      key={index}
      className="w-[28vw] max-md:w-[80vw] hover:scale-105 transition-all cursor-pointer duration-50 shadow-lg bg-white text-black  mx-auto my-auto px-10 py-10 rounded-xl "
    >
      <img
        className="mx-auto rounded-xl aspect-square"
        src={product.image}
        alt={product.title}
      />
      <h2 className="py-2">{product.title}</h2>
      <p className="py-2 text-xl">Price: ${product.price}</p>
      <p className="py-2 ">{product.description}</p>
      {/* <p className="py-2">Category: {product.category}</p> */}
    </div>
  );

  return (
    <div>
      <input
        type="text"
        className="px-2 mx-5 py-2 my-5"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter products"
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option className="px-2 py-2" value="price">
          Price
        </option>
        <option className="px-2 py-2" value="category">
          Category
        </option>
      </select>
      <div className="grid  md:grid-cols-3 grid-cols-1 gap-10 ">
        {paginatedProducts.map(renderProduct)}
      </div>
      <button
        className="px-10 py-5"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
      >
        Previous page
      </button>
      <button
        className="px-10 py-5"
        onClick={() => setPage(page + 1)}
        disabled={(page + 1) * itemsPerPage >= sortedProducts.length}
      >
        Next page
      </button>
    </div>
  );
};

export default ProductList;
