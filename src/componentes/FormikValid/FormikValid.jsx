const FormikValid = () => {
    return (
        <form className="needs-validation " novalidate style={{padding:10}}>
            <div className="form-row">
                <input type="text" value='' />
                <div className="col-md-4 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input type="text" className="form-control is-invalid" id="validationCustom01" placeholder="First name"  required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-md-4 mb-3"> 
                    <label for="validationCustomUsername">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                        <div className="invalid-feedback">
                        Please choose a username.
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <button className="btn btn-primary" type="submit">Submit form</button>
        </form>
    )
}
export default FormikValid;