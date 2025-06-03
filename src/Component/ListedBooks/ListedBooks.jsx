import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Sort By");

  const options = ["Rating", "Number of pages", "Publisher year"];

  return (
    <div className="mx-auto max-w-7xl mt-9">
      <div className="w-full h-[100px] rounded-2xl bg-[rgba(19,19,19,0.05)] flex justify-center items-center">
        <p className="text-[rgb(19,19,19)] workSans text-[28px] font-bold">
          Books
        </p>
      </div>

      {/* Dropdown wrapper */}
      <div className="relative w-[185px] mx-auto mt-8">
        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-[52px] bg-[rgb(35,190,10)] text-white font-semibold text-lg workSans rounded-lg flex justify-between items-center px-5"
        >
          {selected}
          <FaChevronDown />
        </button>
        {/* Dropdown list */}
        {isOpen && (
          <ul className="absolute top-[60px] left-0 w-full bg-white shadow-md rounded-lg py-2 z-50">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;
