import React from "react";
import "./SupplierForm.css";

function SupplierForm() {
  return (
    <div>
      <h2>Supplier Details</h2>
      <div className="items-form">
        <form className="items-sub-form">
          <div className="form-input-1">
            <div className="item-name input-tab">
              <label>Supplier Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter supplier name"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
              </div>
            </div>

            <div className="item-tab input-tab">
              <label>Company Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Company name"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
              </div>
            </div>
          </div>

          <div className="form-input-2">
            <div className="item-price input-tab">
              <label>Country</label>
              <br />
              <input
                type="text"
                placeholder="Enter unit price"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Select country from the list</p>
              </div>
            </div>
            <div className="item-date input-tab">
              <label>State</label>
              <br />
              <input
                type="date"
                placeholder="select date"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Select state from the list</p>
              </div>
            </div>
          </div>

          <div className="form-input-2">
            <div className="item-price input-tab">
              <label>City</label>
              <br />
              <input
                type="text"
                placeholder="Enter city Max"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
              </div>
            </div>
            <div className="item-date input-tab">
              <label>Email Address</label>
              <br />
              <input
                type="email"
                placeholder="Enter email address"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Valid email format</p>
              </div>
            </div>
          </div>

          <div className="form-input-2">
            <div className="item-email input-tab">
              <label>Email Address</label>
              <br />
              <input
                type="email"
                placeholder="Enter email address"
                className="items-form-input"
              />
              <div className="messege">
                <p className="input-val">Valid email format</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SupplierForm;
