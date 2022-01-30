import LeftSidebar from "./component/LeftSidebar";
import Navbar from "./component/Navbar";
import "./App.css"
import Story from "./component/Story";
import AddDiary from "./component/AddDiary";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <LeftSidebar />
        <div className="content">
          <div className="main__content">
            <Story />
            <AddDiary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;