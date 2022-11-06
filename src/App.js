import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="My Website" />,
      <div className="container my-3">
        <Textform heading="Enter your text below." />
      </div>
    </>
  );
}

export default App;
