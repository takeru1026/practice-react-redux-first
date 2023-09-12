import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Hello</h1>
			<h3>Count: {counter}</h3>
      <button onClick={()=>dispatch() }>+</button>
			{isLogin ? <h3>ログインに成功</h3> : <h3>ログインしてください</h3>}
		</div>
	);
}

export default App;
