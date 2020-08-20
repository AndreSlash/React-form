import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export class FormUserDetails extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values,handleChange}=this.props
        
        return (
           <MuiThemeProvider>
               <React.Fragment >
                 <AppBar title="Wpisz dane"/>
                 <TextField
                    hintText="Wpisz swoje imię"
                    floatingLabelText="Imię"
                    name="firstName"
                    defaultValue={values.firstName}
                    onChange={handleChange}
                 />
                 <br/>
                 <TextField
                    hintText="Wpisz swoje nazwisko"
                    floatingLabelText="Nazwisko"
                    name="lastName"
                    defaultValue={values.lastName}
                    onChange={handleChange}
                 />
                 <br/>
                 <TextField
                 hintText="Wpisz email"
                 floatingLabelText="Email"
                 name="email"
                 defaultValue={values.email}
                 type="email"
                 onChange={handleChange}
              />
              <br/>
              <RaisedButton
                label="Następna strona"
                primary="true"
                style={styles.button}
                onClick={this.continue}
              />
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}
const styles={
    button:{
        margin:15
    },
    center:{
        marginLeft:"auto",
        marginRight:"auto"
    }
}
export default FormUserDetails
