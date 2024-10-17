import React, { useState } from "react";
import MenuItem from "../components/MenuItem";

const menuItems = [
  {
    imageSrc: "/public/assets/salad1.png",
    title: "Chicken Caesar Salad",
    description:
      "Grilled chicken, Crouton, lettuce, roumy cheese, Caesar sauce",
    price: "$58.49",
    rating: "4.9",
    category: "Salads",
  },
  {
    imageSrc: "/public/assets/bakery1.png",
    title: "Chocolate Croissant",
    description: "Flaky croissant with rich chocolate filling",
    price: "$4.99",
    rating: "4.7",
    category: "Bakery",
  },
  {
    imageSrc: "/public/assets/sandwich1.png",
    title: "Club Sandwich",
    description:
      "Triple-decker sandwich with turkey, bacon, lettuce, and tomato",
    price: "$8.99",
    rating: "4.8",
    category: "Sandwiches",
  },
  {
    imageSrc: "/public/assets/milkshake1.png",
    title: "Vanilla Milkshake",
    description: "Creamy vanilla milkshake topped with whipped cream",
    price: "$6.49",
    rating: "4.6",
    category: "Milk Shakes",
  },
  {
    imageSrc: "/public/assets/meals1.png",
    title: "Grilled Salmon",
    description: "Served with steamed vegetables and rice",
    price: "$24.99",
    rating: "4.9",
    category: "Meals",
  },
  {
    imageSrc: "/public/assets/hotbeverage1.png",
    title: "Cappuccino",
    description: "Rich espresso with steamed milk and foam",
    price: "$3.99",
    rating: "4.8",
    category: "Hot Beverages",
  },
];

const categories = [
  "All",
  "Meals",
  "Bakery",
  "Salads",
  "Sandwiches",
  "Milk Shakes",
  "Hot Beverages",
];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="menu-page py-20 px-10">
      <h1 className="text-8xl text-[#39B54A] font-bold text-center mb-10">
        Our Menu
      </h1>
      <div className="container mx-auto md:flex-row items-center">
        {/* Category Buttons for Desktop */}
        <div className="hidden md:flex justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to first page when category changes
              }}
              className={`mx-2 px-4 py-2 rounded-full mb-24 border ${
                selectedCategory === category
                  ? "bg-[#39B54A] text-white"
                  : "bg-white text-[#39B54A] border-[#39B54A]"
              } hover:bg-[#39B54A] hover:text-white transition-all`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dropdown Menu for Mobile */}
        <div className="md:hidden flex justify-center mb-28">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Reset to first page when category changes
            }}
            className="bg-white border-[#39B54A] text-[#39B54A] border rounded-full px-4 py-2"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          {currentItems.map((item, index) => (
            <MenuItem
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
              category={item.category}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-[#39B54A] text-white"
                  : "bg-white text-[#39B54A] border-[#39B54A]"
              } hover:bg-[#39B54A] hover:text-white transition-all`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
