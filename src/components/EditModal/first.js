import React from 'react'

function first() {
  return (
    <>
    <input className="modal-body-right" placeholder="Amount" style={{marginTop: '-25px'}}/> 
    <div style={{display: 'flex', justifyContent: "space-evenly", marginTop: '17px'}}>
      <div>Monthly</div>
      <div>Yearly</div>
    </div>
    <input className="modal-body-right" placeholder="Discount" style={{marginTop: '5px'}}/>
    </>
  )
}

export default first