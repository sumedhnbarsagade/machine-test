import React from "react";

import "./ItemInputForm.css";

function ItemInputForm() {
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
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
              </div>
            </div>
            <div className="item-tab input-tab">
              <label>Quantity</label>
              <br />
              <input
                type="number"
                placeholder="Enter quantity"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Numeric value</p>
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
                />
                <div className="messege">
                  <p className="input-val">Max 50 characters</p>
                </div>
              </div>
              <div className="item-date input-tab">
                <label>Date of submission</label>
                <br />
                <input
                  type="date"
                  placeholder="select date"
                  className="items-form-input"
                />
                <div className="messege">
                  <p className="input-val">Max 50 characters</p>
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
