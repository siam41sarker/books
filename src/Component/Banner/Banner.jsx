import { createContext, useEffect, useState } from "react";
import bannerBooks from "../../assets/bannerBook.png";
import AllBooks from "../AllBooks/AllBooks";
export const booksContext = createContext([]);
const Banner = () => {
  const [books,setBooks] = useState([]);
  const [isButtonClicked,setIsButtonClicked] = useState(false);
  const handleViewButton = ()=>
      {
          setIsButtonClicked(!isButtonClicked);
      }
  useEffect(()=>
      {
        fetch('/AllBooks.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
        .catch(e=>console.log(e))
      },[])
  return (
    <div className=" max-w-7xl mx-auto mt-12">
      <div className="flex gap-[86px] bg-[rgba(19,19,19,0.05)]  rounded-3xl">
        <div className="w-1/2 pl-[120px] py-[136px]">
            <h2 className="font-bold text-[rgb(19,19,19)] text-[56px] playFair">Books to freshen up your bookshelf</h2>
            <button onClick={handleViewButton} className="rounded-2xl bg-[rgb(35,190,10)] px-7 py-[21px] text-white font-bold text-xl workSans mt-12">{isButtonClicked?"View Less": "View The List"}</button>
        </div>
        <div className="w-1/2 py-20 pr-[120px]">
          <img className="w-[318px] h-[394px] object-cover" src={bannerBooks} alt="books" />
        </div>
      </div>
       <div className={`max-w-7xl mx-auto mt-24 ${!isButtonClicked && "hidden"}`}>
            <h2 className="text-center text-[rgb(19,19,19)] font-bold playFair text-[40px]">Books</h2>
            <booksContext.Provider value={[books]}>
                 <AllBooks></AllBooks>
            </booksContext.Provider>
        </div>
    </div>
  );
};

export default Banner;
