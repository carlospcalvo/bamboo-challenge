import "./App.css";
import Home from "./components/Home";
import { FormContextProvider } from "./context/FormContext";

function App() {
	return (
		<div className="App">
			<FormContextProvider>
				<Home />
			</FormContextProvider>
		</div>
	);
}

export default App;
