import './app.css';
import ProdDesc from './components/ProdDesc';
import ProdName from './components/ProdName';
import ProdPic from './components/ProdPic';
import ProdPrice from './components/ProdPrice';
function App() {
  return (
    <div className="App">
      <ProdPic />
      <ProdName />
      <ProdPrice />
      <ProdDesc />
    </div>
  );
}
export default App;