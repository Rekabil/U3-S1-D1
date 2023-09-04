import logo from "./logo.svg";
import "./App.css";

import ButtonComponent from "./components/ButtonComponent";
import ImageCoponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <ImageCoponent
        src="https://images.unsplash.com/photo-1683009680116-b5c04463551d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
        alt="Desert Img"
      />
      <ButtonComponent name="Hello World" />
    </div>
  );
}

export default App;
