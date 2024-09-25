import React, { useEffect, useState } from "react";
import "./SupplierForm.css";

function SupplierForm() {

  const [isSupplier, setIsSupplier] = useState(false);
  const [supplierName, setSupplierName] = useState('');
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const [countries, setCountries] = useState([]); 
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Fetch the country list from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList');
        
        if (!response.ok) {
          throw new Error('Failed to fetch country list');
        }

        const result = await response.json();

        if (result && result.data && Array.isArray(result.data.countyList)) {
          setCountries(result.data.countyList); 
        } else {
          throw new Error('Invalid data format received');
        }

        setLoading(false);
      } catch (error) {
        setErrors(error.message);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const validateSupplierName = (name) => {
    const [personName, companyName] = name.split(',');
    if( name.split(',').length - 1 !== 1){
      return "Use a single comma to separate name and company."
    }
    if(personName.length > 255){
      return "Supplier name must not greater than 255 char"
    }
    return '';
  }

  //code for email validation

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) ? '' : 'Email address is not valid.';
  };

  //input fields validation
  const handleSupplierNameChange = (e) => {
    const name = e.target.value;

    setSupplierName(name);
    setErrors((prev) => ({ ...prev, supplierName: validateSupplierName(name)}));
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setErrors((prev) => ({ ...prev, email: validateEmail(emailValue) }));
  };


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
                value={supplierName}
                onChange={handleSupplierNameChange}
              />
              <div className="messege">
                <p className="input-val">Max 50 characters</p>
                {errors.supplierName && <span style={{color: 'red', fontSize: '12px'}}>{errors.supplierName}</span>}
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
              <select className="items-form-input">
                  {countries.map((country) => (
                    <option key={country.countryId} value={country.countryId}>
                      {country.name}
                    </option>
                  ))}
              </select>
              <div className="messege">
                <p className="input-val">Select country from the list</p>
              </div>
            </div>
            <div className="item-date input-tab">
              <label>State</label>
              <br />
              <input
                type="text"
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
                value={email}
                onChange={handleEmailChange}
              />
              <div className="messege">
                <p className="input-val">Valid email format</p>
                {errors.email && <span style={{color: 'red', fontSize: '12px'}}>{errors.email}</span>}
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
