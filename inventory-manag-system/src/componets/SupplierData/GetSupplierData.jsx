import React, {useState, useEffect} from "react";
import "./SupplierData.css";

function GetSupplierData() {
  const [supplierData, setSupplierData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSupplierData();
  }, []);

   // Fetch supplier data from API
   const fetchSupplierData = async () => {
    try {
      const response = await fetch(
        'https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Suppliers'
      );
      
      setSupplierData(response.data.suppliers); // Assuming response.data contains an array of suppliers
    } catch (err) {
      setError('Error fetching supplier data');
      console.error(err);
    }
  };
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
          {/* Map through supplier data and render rows */}
          {supplierData.length > 0 ? (
            supplierData.map((supplier) => (
              // console.log(supplier)
              
              <tr key={supplier.supplierId}>
                <td>{supplier.supplierName}</td>
                {/* Replace the itemName and quantity with actual data fields */}
                <td>{supplier.itemName || 'N/A'}</td>
                <td>{supplier.quantity || 'N/A'}</td>
                <td>{supplier.cityName}</td>
                <td>{supplier.countryName}</td>
                <td>{supplier.email}</td>
                <td>
                  +{supplier.phoneCode} {supplier.phoneNumber}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No supplier data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GetSupplierData;
