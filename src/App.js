import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Disabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container" data-bs-theme={mode}>
        <About title="About TextUtils" mode={mode} />
        <TextForm
          text="Enter your Text here"
          summaryheading="Your Text Summary"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
