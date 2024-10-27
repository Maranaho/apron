import { createContext, Dispatch } from "react"

interface State { currentUser: string | null }

type Action = 
  | { type: "SHOW_NOTIFICATION"; payload: string | null }


const initialState: State = { currentUser: null }


const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case "SHOW_NOTIFICATION":
      return { 
        ...state, 
        currentUser: action.payload }
      }

  }


const UsersContext = createContext<{
  state: State 
  dispatch: Dispatch<Action> | null
}>({ state: initialState, dispatch: null })

export { initialState, reducer, UsersContext }