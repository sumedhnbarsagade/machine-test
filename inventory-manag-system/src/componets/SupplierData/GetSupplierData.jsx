import React, {useState, useEffect} from "react";
import "./SupplierData.css";

function GetSupplierData() {
  const [suppliers, setSuppliers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSupplierData();
  }, []);

   // Fetch data when the component loads
  useEffect(() => {
    fetchSupplierData();
  }, []);

  // Fetch supplier data from API using fetch
  const fetchSupplierData = async () => {
    try {
      const response = await fetch(
        'https://apis-technical-test.conqt.com/Api/Item-Supplier/Get-All-Suppliers'
      );
      const data = await response.json();
      
      // Check if data has the suppliers array
      if (response.status === 200 && data?.data?.suppliers) {
        setSuppliers(data.data.suppliers); // Set supplier data from the API
      } else {
        setError('Error fetching supplier data');
      }
    } catch (err) {
      setError('Error fetching supplier data');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Supplier Data</h2>
      {error && <p>{error}</p>}

      {/* Table to display supplier data */}
      <div className="data-table">
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Item Name</th> {/* Placeholder field */}
            <th>Quantity</th>   {/* Placeholder field */}
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through supplier data and render rows */}
          {suppliers.length > 0 ? (
            suppliers.map((supplier) => (
              <tr key={supplier.supplierId}>
                <td>{supplier.supplierName}</td>
                {/* Placeholder fields for itemName and quantity */}
                <td>N/A</td> 
                <td>N/A</td>
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
    </div>
  );
};

export default GetSupplierData;
