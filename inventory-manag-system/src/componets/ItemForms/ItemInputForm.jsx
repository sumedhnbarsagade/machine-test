import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./ItemInputForm.css";

function ItemInputForm() {

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [submissionDate, setSubmissionDate] = useState(null);
  const [errors, setErrors] = useState('')

  const validateItemName = (name) => {
    if (name.length > 225) {
      return "Item name must not exceed 225 characters.";
    }
    return '';
  };

  const validateQuantity = (qty) => {
    if (!/^\d*$/.test(qty) || qty.length > 10) {
      return "Quantity must be an integer and max length of 10.";
    }
    return '';
  };

  const validateUnitPrice = (price) => {
    const pricePattern = /^\$?\s?\d{1,3}(,\d{3})*(\.\d{2})?$/;
    if (!pricePattern.test(price)) {
      return "Unit price must be a valid currency format (e.g. $12,000.00).";
    }
    return '';
  };

  const validateSubmissionDate = (date) => {
    if (!date || date < new Date()) {
      return "Date must be today or in the future.";
    }
    return '';
  };


  const handleItemNameChange = (e) => {
    const name = e.target.value;
    setItemName(name);
    setErrors((prev) => ({ ...prev, itemName: validateItemName(name) }));
  };

  const handleQuantityChange = (e) => {
    const qty = e.target.value;
    setQuantity(qty);
    setErrors((prev) => ({ ...prev, quantity: validateQuantity(qty) }));
  };

  const handleUnitPriceChange = (e) => {
    const price = e.target.value;
    setUnitPrice(price);
    setErrors((prev) => ({ ...prev, unitPrice: validateUnitPrice(price) }));
  };

  const handleDateChange = (date) => {
    setSubmissionDate(date);
    setErrors((prev) => ({ ...prev, submissionDate: validateSubmissionDate(date) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      itemName: validateItemName(itemName),
      quantity: validateQuantity(quantity),
      unitPrice: validateUnitPrice(unitPrice),
      submissionDate: validateSubmissionDate(submissionDate),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).every(error => !error)) {
      console.log('Form submitted successfully');
      // Handle form submission logic here
    }
  }; 

  return (
    <div>
      <h2>Item Details</h2>
      <div className="items-form">
        <form className="items-sub-form">
          <div className="form-input-1">
            <div className="item-name input-tab">
              <label>Item Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter item name"
                className="items-form-input"
                onChange={handleItemNameChange}
                value={itemName}
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
                {
                errors.itemName && <span style={{color: 'red', fontSize:'12px'}}>{errors.itemName}</span>
                }
              </div>
            </div>

            <div className="item-tab input-tab">
              <label>Quantity</label>
              <br />
              <input
                type="number"
                placeholder="Enter quantity"
                className="items-form-input"
                value={quantity}
                onChange={handleQuantityChange}
              />
             
              <div className="messege">
                <p className="input-val">Numeric value</p>
                {
                errors.quantity && <span style={{color: 'red', fontSize: '12px'}} >{errors.quantity}</span>
                }
              </div>
            </div>
          </div>

          <div>
            <div className="form-input-2">
              <div className="item-price input-tab">
                <label>Unit Price</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter unit price"
                  className="items-form-input"
                  value={unitPrice}
                  onChange={handleUnitPriceChange}
                />
                <div className="messege">
                  <p className="input-val">Numeric value (USD)</p>
                  {
                  errors.unitPrice && <span style={{color: 'red', fontSize: '12px'}}>{errors.quantity}</span>
                }
                </div>
              </div>
              <div className="item-date input-tab">
                <label>Date of submission</label>
                <br />
                <DatePicker 
                className="items-form-input"
                    selected={submissionDate} 
                    onChange={(date) => setSubmissionDate(date)} 
                    minDate={new Date()} 
                    placeholderText="Select a date"
                  />
                <div className="messege">
                  {
                    errors.submissionDate && <span style={{color: 'red', fontSize: '12px'}}>{errors.submissionDate}</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ItemInputForm;
