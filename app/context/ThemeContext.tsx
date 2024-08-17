"use client"

import { createContext, useReducer } from "react";

type StateType = {
    toggleMenu: boolean
}

type ToggleAction = {
    type: "TOGGLE_MENU";
}

type ActionType = ToggleAction;

const INITIAL_STATE = {
    toggleMenu: false
}
export const ThemeContext = createContext<{
    state: StateType,
    dispatch: React.Dispatch<ActionType>
}>({
    state: INITIAL_STATE,
    dispatch: () => { }
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,
                toggleMenu: state.toggleMenu === false ? true : false
            }

        default:
            return state
    }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{ state, dispatch }} >
            {children}
        </ThemeContext.Provider>
    )
}