const initialState = ['Harry Potter', 'Lord of the Ring', 'js']

export const booksReducer = (state = initialState, action: BooksReducerActionType): string[] => {
	switch (action.type) {
		case "ADD_BOOK":
			return [...state, action.payload.newBook]
		case "DELETE_BOOK":
			return state.filter(el => el !== action.payload.deletingBook)
		default:
			return state
	}
}

type BooksReducerActionType = AddBookACType | DeleteBookACType


type AddBookACType = ReturnType<typeof addBookAC>
export const addBookAC = (newBook: string) => {
	return {
		type: "ADD_BOOK",
		payload: {
			newBook: newBook
		}
	} as const
}

type DeleteBookACType = ReturnType<typeof deleteBookAC>
export const deleteBookAC = (deletingBook: string) => {
	return {
		type: "DELETE_BOOK",
		payload: {
			deletingBook: deletingBook
		}
	} as const
}


