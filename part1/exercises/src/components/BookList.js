import styles from './BookList.module.css'

export default function BookList() {
   let pageTitle = "Books I Read Recently";
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388941505i/27607.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677361825i/57945316.jpg";
   let book3 = "https://images.bwbcovers.com/014/The-Transit-of-Venus-9780140107470.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Mortals by Norman Rush" />
         <img src={book2} alt="Babel by R.F. Kuang" />
         <img src={book3} alt="The Transit of Venus by Shirley Hazzard" />
      </div>      
   );
}