import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container">
        <TextForm
          text="Enter your Text here"
          summaryheading="Your Text Summary"
        />
      </div>
    </>
  );
}

export default App;
