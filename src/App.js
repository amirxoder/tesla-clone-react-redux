import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
