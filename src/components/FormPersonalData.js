import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class FormPersonalData extends Component {
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
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
                 hintText="Wpisz nazwę swojej pracy"
                 floatingLabelText="Praca"
                 name="occupation"
                 defaultValue={values.occupation}
                 onChange={handleChange}
              />
              <br/>
              <TextField
                 hintText="Wpisz nazwę miasta"
                 floatingLabelText="Miasto"
                 name="city"
                 defaultValue={values.city}
                 onChange={handleChange}
              />
              <br/>
              <TextField
              hintText="Wpisz bio"
              floatingLabelText="bio"
              name="bio"
              defaultValue={values.bio}
              onChange={handleChange}
           />
           <br/>
           <RaisedButton
             label="Poprzednia strona"
             style={styles.button}
             onClick={this.back}
           />
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
export default FormPersonalData
