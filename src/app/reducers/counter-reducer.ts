export const counterReducer = (state = 0, action: CounterActionType): number => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1
		case "DECREMENT":
			return state - 1
		default:
			return state
	}

}


type CounterActionType = DecrementACType | IncrementACType


type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = () => {
	return {type: "INCREMENT"} as const
}

type DecrementACType = ReturnType<typeof decrementAC>
export const decrementAC = () => {
	return {type: "DECREMENT"} as const
}


