import LeftSidebar from "./component/LeftSidebar";
import Navbar from "./component/Navbar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;