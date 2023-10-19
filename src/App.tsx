import './App.css';
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {decrementAC, incrementAC} from "./app/reducers/counter-reducer";
import {useState} from "react";
import {addBookAC, deleteBookAC} from "./app/reducers/books-reducer";

function App() {
	const counter = useAppSelector(state => state.counter)
	const books = useAppSelector(state => state.books)
	const dispatch = useAppDispatch()

	const increment = () => {
		dispatch(incrementAC())

	}
	const decrement = () => {
		dispatch(decrementAC())
	}


	const [bookTitle, setBookTitle] = useState('')

	const addBook = () => {
		if (bookTitle.trim()) {
			dispatch(addBookAC(bookTitle))
			setBookTitle('')
		}
	}

	const deleteBook = (book: string) => {
		dispatch(deleteBookAC(book))
	}

	return (
		<>
			<div className={"App"}>
				<h1>{counter}</h1>
				<button onClick={decrement}>-1</button>
				<button onClick={increment}>+1</button>

			</div>
			<div style={{marginLeft: "40px"}}>
				<h2>Books</h2>
				<input type="text" value={bookTitle} onChange={e => setBookTitle(e.currentTarget.value)}/>
				<button onClick={addBook}>+</button>
				<ul>
					{books.map((el) => <li key={el}>
						<button onClick={() => deleteBook(el)}>x</button>
						{el}</li>)}
				</ul>
			</div>
		</>


	)

}

export default App;
