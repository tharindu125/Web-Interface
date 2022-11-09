import React, { Component } from 'react';
import img2 from '../image/img2.jpg';
// import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            Image: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lastHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    imageHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            image: "",
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <div style={{ backgroundImage:`url(${img2})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"contain", 
                    height:950,
                    width:1518}}>

                <div className="Auth-form-container">
                    <div className="Auth-form">
                    <div className="Auth-form-content">
                        <h2 className="Auth-form-title">Patients Registration</h2>
                    </div>
                    

                <form className="form-group-mt" onSubmit={this.handleSubmit}>
                    <br/>
                    <div className='h'>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firstHandler} placeholder="FirstName..." /><br /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lastHandler} placeholder="LastName..." /><br /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br /><br />

                    <label>Input ECG image : </label><input className='imgInput' type="file" multiple accept="image/*" onChange={this.imageHandler} /><br/><br />

                    <label>Gender :</label><select onChange={this.genderHandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br /><br/>
                    </div>
                    
                    <div className="d-grid gap-2 mt-3">
                    <input type="submit" value="Submit" />
                    </div>

                </form>
                </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Form