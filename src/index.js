import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// actions -> increment, decrement
const increment = () => {
	return {
		type: 'INCREMENT',
	};
};

const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};

// reducer
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return '';
	}
};

// store
let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
