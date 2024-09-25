import React from "react";
import "./InventoryData.css";

function InventoryData() {
  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InventoryData;
