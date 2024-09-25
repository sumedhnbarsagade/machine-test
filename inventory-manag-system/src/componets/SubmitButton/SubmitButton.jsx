import React from 'react'
import './SubmitButton.css'

function SubmitButton() {
  return (
    <div className='btn-comp'>
        <h2>Submitted Data</h2>
        <p style={{textAlign: 'center'}}>The data submitted by users will be displayed below</p>
        <button className='save-btn'>Save Changes</button>
    </div>
  )
}

export default SubmitButton