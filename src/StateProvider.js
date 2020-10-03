import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and orovide Data Layer
export const StateProvider = ({ reducer, initialState, children }) => {
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</StateContext.Provider>
	);
};

// pull information from dataLayer
export const useStateValue = () => useContext(StateContext);
