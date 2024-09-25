import React, { useState } from "react";
import ItemInputForm from "../ItemForms/ItemInputForm";
import SupplierForm from "../SupplierForm/SupplierForm";
import "./Item.css";

function Item() {
  const [showItemData, setShowItemData] = useState(true);
  const [showSupplierData, setShowSupplierData] = useState(false);

  const [checkboxCheck, setCheckBoxCheck] = useState([]);
  function handleChange(e) {
    console.log("item checked");
  }

  // Handle the checkbox change for "Item" and "Supplier"
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "item") {
      setShowItemData(checked);
    } else if (name === "supplier") {
      setShowSupplierData(checked);
    }
  };
  return (
    <div className="checkbox-item">
      {/* <div className="checkbox"> */}
      <div className="checkbox-label">
        <label className="checkbox-container">
          <input
            type="checkbox"
            name="item"
            checked={showItemData}
            onChange={handleCheckboxChange}
          />
          Item
          <span class="checkmark"></span>
        </label>
      


        <label className="checkbox-container">
          <input
            type="checkbox"
            name="supplier"
            checked={showSupplierData}
            onChange={handleCheckboxChange}
          />
          Supplier
        </label>
        </div>
      {/* Conditionally render components */}
      <div className="item-form-check">{showItemData && <ItemInputForm />}</div>
      <div className="supplier form-check">{showSupplierData && <SupplierForm />}</div>
    </div>
  );
}

export default Item;
