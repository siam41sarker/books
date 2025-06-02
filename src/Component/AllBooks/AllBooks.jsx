import { useContext } from "react";
import { booksContext } from "../Banner/Banner";
const AllBooks = () => {
  const [books] = useContext(booksContext);
  return (
    <div className="grid grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.bookId} className="border border-solid border-[rgba(19,19, 19,0.15)] rounded-2xl">
          <div className="p-6 flex flex-col">
            <div className="bg-[rgb(243,243,243)] h-[230px] rounded-2xl flex justify-center items-center">
              <img
                className="h-4/5 w-1/2 object-cover rounded-xl"
                src={book.image}
                alt={`books ${book.bookId}`}
              />
            </div>
            <div className="mt-6 flex gap-3">
              {book.tags.map((tag,idx) => (
                <div key={idx} className="rounded-[30px] bg-[rgba(35,190,10,0.05)]">
                  <p className="py-[7px] px-4 text-[rgb(35,190,10)] workSans font-medium">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4 border-b border-dashed border-[rgba(19,19,19,0.15)]">
              <h1 className="text-[rgb(19,19,19) text-2xl font-bold playFair]">
                {book.bookName}
              </h1>
              <p className="text-[rgba(19,19,19,0.8)] workSans font-medium pb-5">
                By: <span>{book.author}</span>
              </p>
            </div>
            <div className="mt-5 flex justify-between">
              <p className="text-[rgba(19,19,19,0.8)] workSans font-medium">
                {book.category}
              </p>
              <p className="text-[rgb(35,190,10)]">{book.rating}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
