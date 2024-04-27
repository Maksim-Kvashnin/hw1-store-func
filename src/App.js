import './App.css';
import { ShopItemFunc } from './ShopItemFunc';
import data from './shopItemData.json';

function App() {
  return (
    <div className="container">
      <div className="background-element" />
      <div className="highlight-window">
        <div className='highlight-overlay' />
      </div>
      <div className="window">
        <ShopItemFunc item={data} />
      </div>
    </div>
  );
}

export default App;
