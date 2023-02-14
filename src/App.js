import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos 😊!" />
    </div>
  );
}
export default App;
