import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalData from './FormPersonalData'
import Confirm from './Confirm'
import Success from './Success'
export class UserForm extends Component {
    state={
        step:1,
        firstName: '',
        lasttName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }
    nextStep = () =>{
        const{step}=this.state
        this.setState({
            step:step+1
        })
    }
    prevStep = () =>{
        const{step}=this.state
        this.setState({
            step:step-1
        })
    }
    handleChange = (e) =>{
        const val = e.target.value
        console.log(val)
        this.setState({
            ...this.state,
            [e.target.name]:val
        })
    }
    render() {
        const {step}=this.state
        const {firstName,lastName,email,occupation,city,bio}=this.state
        const value = {firstName,lastName,email,occupation,city,bio}
        switch(step){
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={value}
                    />
                )
            case 2:
                return(
                    <FormPersonalData
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={value}
                />
                )
            case 3:
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={value}
                />
                )
            case 4:
                return(
                    <Success
                        values={value}
                    />
                )
        }
        
    }
}

export default UserForm
