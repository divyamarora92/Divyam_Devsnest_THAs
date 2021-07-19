import Card from "./components/card";
import "./style.css"
import Chessboard from "./components/chessboard";
function App() {
  return (
    <div className="App">
    <Card/>
    <div className="chess">
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    <Chessboard/>
    </div>
    
    </div>
  );
}

export default App;
