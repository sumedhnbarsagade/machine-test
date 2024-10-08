import logo from './logo.svg';
import Header from './componets/Header/Header';
import './App.css';
import Item from './componets/Item/Item';
import ItemInputForm from './componets/ItemForms/ItemInputForm';
import SupplierForm from './componets/SupplierForm/SupplierForm';
import SubmitButton from './componets/SubmitButton/SubmitButton';
import GetSupplierData from './componets/SupplierData/GetSupplierData';

function App() {
  return (
    <div className="App">
      <Header/>
      <Item/>
      {/* <ItemInputForm/>
      <SupplierForm/> */}
      <SubmitButton/>
      <GetSupplierData/>
    </div>
  );
}

export default App;
