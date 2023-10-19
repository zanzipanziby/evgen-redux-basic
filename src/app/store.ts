import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {booksReducer} from "./reducers/books-reducer";


const rootReducer = combineReducers({
	counter: counterReducer,
	books: booksReducer
})

export const store = createStore(rootReducer)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


//@ts-ignore
window.getStore = store