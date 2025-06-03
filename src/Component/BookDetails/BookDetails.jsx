import { useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
const BookDetails = () => {
    const [isClicked,setIsClicked] = useState({
            "cat":false,
            "status":"read"
    });
    const handleReadButton = (stat)=>
            {
               if(stat === "read")
                   {
                        setIsClicked(
                                {
                                    "cat":true,
                                    "status":stat
                                })
                   }
                else
                   {
                        setIsClicked(
                                {
                                    "cat":false,
                                    "status":"wishlist"
                                }
                        )
                   }
                    
            }
    const {url} = useParams();
    const loadedBooks = useLoaderData();
    const books = loadedBooks.find(each=>each.bookName.toLowerCase().replace(/\s+/g,"-") === url);
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = books;
    return (
        <div className="max-w-7xl mx-auto mt-12 flex gap-12">
            <div className="w-1/2 bg-[rgba(19,19,19,.05)] rounded-2xl flex justify-center items-center">
               <img className="w-1/2 h-4/5 object-cover" src={image} alt={bookName} />
            </div>
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col gap-4 pb-6 border-b border-solid border-[rgba(19,19,19,0.15)]">
                        <h1 className="text-[rgb(19,19,19)] text-[40px] font-bold playFair">{bookName}</h1>
                        <p className="text-[rgba(19,19,19,0.8)] text-xl font-medium workSans">by: {author}</p>
                </div>
                <div className="mt-4 pb-4 border-b border-solid border-[rgba(19,19,19,0.15)]">
                        <p className="text-[rgba(19,19,19,0.8)] workSans text-xl font-medium">{category}</p>
                </div>
                <div className="mt-6">
                    <p className="workSans text-[rgba(19,19,19,0.7)]"><span className="text-[rgb(19,19,19)] font-bold">Review: </span>{review}</p>
                </div>
                <div className="mt-7 flex items-center gap-8 pb-4 border-b border-solid border-[rgba(19,19,19,0.15)]">
                    <h3 className="text-[rgb(19,19,19)] workSans font-bold">Tag</h3>
                    <div className="flex justify-center items-center gap-3">
                        {
                            tags.map((tag,idx)=><p key={idx} className="py-2 px-4 bg-[rgba(35,190,10,0.05)] rounded-[30px] text-[rgb(35,190,10)] workSans font-medium">#{tag}</p>)
                        }
                    </div>
                </div>
                <div className="mt-6 flex gap-[65px] items-end">
                        <p className="text-[rgba(19,19,19,0.7)] workSans">Number of Pages:</p>
                        <p className="text-[rgb(19,19,19)] workSans font-semibold">{totalPages}</p>
                </div>
                <div className="mt-6 flex gap-[125px] items-end">
                        <p className="text-[rgba(19,19,19,0.7)] workSans">Publisher:</p>
                        <p className="text-[rgb(19,19,19)] workSans font-semibold">{publisher}</p>
                </div>
                <div className="mt-6 flex gap-[59px] items-end">
                        <p className="text-[rgba(19,19,19,0.7)] workSans">Year of Publishing:</p>
                        <p className="text-[rgb(19,19,19)] workSans font-semibold">{yearOfPublishing}</p>
                </div>
                <div className="mt-6 flex gap-[149px] items-end">
                        <p className="text-[rgba(19,19,19,0.7)] workSans">Rating:</p>
                        <p className="text-[rgb(19,19,19)] workSans font-semibold">{rating}</p>
                </div>
                <div className="mt-8 flex gap-4">
                        <NavLink to="/listed-books" onClick={()=>handleReadButton("read")} className={isClicked.cat? "flex justify-center items-center py-[18px] px-7 border border-solid border-[rgba(19,19,19,0.3)] bg-[rgb(80,177,201)] text-white font-semibold text-lg workSans rounded-lg":"flex justify-center items-center py-[18px] px-7 border border-solid border-[rgba(19,19,19,0.3)] text-[rgb(19,19,19)] font-semibold text-lg workSans rounded-lg hover:bg-[rgb(80,177,201)]"}>Read</NavLink>
                        <NavLink to="/listed-books" onClick={()=>handleReadButton("wishlist")} className={isClicked.cat !== true ? "flex justify-center items-center py-[18px] px-7 border border-solid border-[rgba(19,19,19,0.3)] bg-[rgb(80,177,201)] text-white font-semibold text-lg workSans rounded-lg": "flex justify-center items-center py-[18px] px-7 border border-solid border-[rgba(19,19,19,0.3)] text-[rgb(19,19,19)] font-semibold text-lg workSans rounded-lg hover:bg-[rgb(80,177,201)]"}>Wishlist</NavLink>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;