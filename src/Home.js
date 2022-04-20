import React, { useState } from 'react';
function Home(props) {
    const [pname, setName] = useState('');
    const [pincode, setPincode] = useState('');
    const [dtype, setDtype] = useState('');
    
    
    const changeName = (event) => {
      setName(event.target.value);
    };
    
    const changePincode = (event) => {
      setPincode(event.target.value);
    };
    const changeDtype= (event) => {
        setDtype(event.target.value);
      };
    
    const transferValue = (event) => {
      event.preventDefault();
      const val = {
        pname,
        pincode,
        dtype,
      };
      props.func(val);
      clearState();
    };
    
    const clearState = () => {
      setName('');
      setPincode('');
      setDtype('');
    };


    return (
        <>
            <div class="container">
                <div class="card p-4 m-4">
                    <form>
                        <div class="form-group">
                            <label >Waight Of Product</label>
                            <input type="number" value={pname} onChange={changeName} class="form-control" aria-describedby="emailHelp" placeholder="Product waight in KG" />
                        </div>
                        <div class="form-group">
                            <label >Pincode</label>
                            <input type="number" value={pincode} onChange={changePincode} class="form-control" placeholder="Enter Pincode" />
                        </div>
                        <div class="form-group">
                            <label >Delivery type</label>
                            <select class="form-control" value={dtype} onChange={changeDtype} id="devevery">
                                <option>Choose Delivery</option>
                                <option>Forward</option>
                                <option>Forward & RTO</option>
                            </select>
                        </div>
                       <button onClick={transferValue} class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;

