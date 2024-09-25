import React, {useState} from "react";
import "./Item.css";

function Item() {

    const [checkboxCheck, setCheckBoxCheck] = useState([])
    function handleChange(e){
        console.log('item checked');
        
    }
  return (
    <div className="checkbox-item">
      <div>
        <input value='items' type="checkbox" onChange={handleChange} />
        <label>Item</label>
      </div>
      <div>
        <input value='supplier' type="checkbox" onChange={handleChange}/>
        <label>Supplier</label>
      </div>
    </div>
  );
}

export default Item;
