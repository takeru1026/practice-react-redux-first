// reducer
const isLogginReducer = (state = false, action) => {
	switch (action.type) {
		case 'LOGIN':
			return !state;
		default:
			return state;
	}
};

export default isLogginReducer;
