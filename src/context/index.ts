import { createContext, Dispatch } from "react"

interface State {
  currentUser: string | null;
  currentSortKey: string;
}

type Action = 
  | { type: "SHOW_NOTIFICATION"; payload: string | null }
  | { type: "SET_SORTKEY"; payload: string }


const initialState: State = {
  currentUser: null,
  currentSortKey:"firstName"
}


const reducer = (state: State, action: Action): State => {
  switch (action.type) {

    case "SHOW_NOTIFICATION":
      return { 
        ...state, 
        currentUser: action.payload
      }
      

    case "SET_SORTKEY":
      return { 
        ...state, 
        currentSortKey: action.payload
      }
  }
}


const UsersContext = createContext<{
  state: State 
  dispatch: Dispatch<Action> | null
}>({ state: initialState, dispatch: null })

export { initialState, reducer, UsersContext }