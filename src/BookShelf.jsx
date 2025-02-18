import { useState } from "react"

const BookShelf =()=>{

const [books,setBooks]=useState([]);
const [newBook,setNewBook]= useState({
    title: '', 
    author: '' 
})

const initialState = {
    title: '',
    author: ''
}



const handleInputChange =(e)=>{
setNewBook({...newBook,
    [e.target.name]:e.target.value
})

}


const handleSubmit=(e)=>{
e.preventDefault()
setBooks([...books,newBook]);
setNewBook(initialState);

}


return(
    <>
    <div className="bookshelfDiv">
    <div className="formDiv">
      <h3>Add a Book</h3>
      
      <form onSubmit={handleSubmit}> 
        <label htmlFor="">Title:</label>

        <input 
        type="text"
        value={newBook.title}
        onChange={handleInputChange}
        name="title"
        />


        <label htmlFor="">Author:</label>


        <input 

        type="text"
        value={newBook.author}
        onChange={handleInputChange}
        name="author"
        />
        <button type="submit">Submit</button>
        </form>

    </div>
    <div className="bookCardsDiv">
        {books.map((book)=>(
            <div className="bookCard">
            <h3>{book.title}</h3>
            <p>{`by ${book.author}`}</p>

            </div>



        ))}


    </div>
  </div>
    
    
    </>


)


}

export default BookShelf