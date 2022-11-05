import React, { Component } from 'react'
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

                <form onSubmit={this.handleSubmit}>
                    <h1>Patients Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firstHandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lastHandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..." /><br />

                    <label>Input ECG image : </label><input type="file" multiple accept="image/*" onChange={this.imageHandler} /><br/>

                    <label>Gender :</label><select onChange={this.genderHandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form