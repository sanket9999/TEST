import React from 'react'
import '../App.css'

export default function Userform() {
    const mystyle = { 
        backgroundcolor: "#ff0000",
    };
    return (
        <div className="container my-3 back" style={mystyle} >
            <h4>USERFORM</h4>
            <form>
                <div className="form-row" >
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">confirm Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Confirm Email"/>
                    </div>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Confirm Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Permanent Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Permanent Address"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Current Address</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Current Address"/>
                </div>
                <div className="form-row">
                    
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class ="form-check-label" for="gridCheck">
                        I Agree to Terms
                        </label>
                    </div>
                </div>
                <div class="container Register">
                <button type="submit" className="btn btn-primary">Register</button>
                <pre>  </pre>
                </div>
                <div class="container signin">
                    
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                </div>
                <pre>  </pre>
                
            </form>
            <div class="footer">
                <p>Copyright</p>
            </div>
        </div>
        
       
    )
    
}
