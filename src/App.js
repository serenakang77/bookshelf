import firebaseConfig from "./firebase"

import {useState,useEffect} from "react"
import {getDatabase, push, ref, onValue, remove} from "firebase/database"

const App = () => {

  const [books, setBooks] = useState([])
  
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
  
    const database = getDatabase(firebaseConfig)
    // create a variable that makes reference to our database
    const dbRef = ref(database);
    // grabbing the information from our database
    onValue(dbRef, (res) => {
      
      const newState = []
      // return a response
      const data = res.val()
      for(let key in data){
        newState.push({key: key, name: data[key]})
      }
      setBooks(newState)
    })
  }, [])

  const handleInputChange = (event) => {setUserInput(event.target.value)}

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const database = getDatabase(firebaseConfig)
    const databaseRef = ref(database);
    push(databaseRef, userInput)
    setUserInput("")
  }

  const handleRemoveBook = (bookId) => {
    const database = getDatabase(firebaseConfig)
    // that bookId will be folder (if you want specific folder, then put it there)
    const databaseRef = ref(database, `/${bookId}`)
    remove(databaseRef)
  }

  return (
    <div>
      <h1>My BookShelf!!</h1>
      <ul>
        {books.map((book, index) => {
          return (
            <li key={book.key}>
              <p>{book.name}</p>
              <button onClick={() => {handleRemoveBook(book.key)}}>Remove</button>
            </li>
          )
        })}
      </ul>
      <form action='submit'>
        <label htmlFor='newBook'>Add a book to your bookshelf</label>
        <input
          type='text'
          id='newBook'
          onChange={handleInputChange}
          value={userInput}
        />

        <button onClick={handleFormSubmit}>Add Book</button>
      </form>
    </div>
  )
}

export default App