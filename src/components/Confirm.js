import React, { Component } from 'react'
import {List,ListItem} from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export class Confirm extends Component {
    back=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values:{firstName,lastName,email,occupation,city,bio}}=this.props
        return (
            <MuiThemeProvider>
            <React.Fragment >
              <AppBar title="Wpisz dane"/>
                <List>
                    <ListItem 
                        primaryText="Imię"
                        secondaryText={firstName}
                        />
                    <ListItem
                        primaryText="Nazwisko"
                        secondaryText={lastName}/>
                    <ListItem
                        primaryText="Email"
                        secondaryText={email}/>
                    <ListItem
                        primaryText="Praca"
                        secondaryText={occupation}/>
                    <ListItem
                        primaryText="Bio"
                        secondaryText={bio}/>
                </List>
                <br/>
                <RaisedButton
                    label="Poprzednia strona"
                    style={styles.button}
                    onClick={this.back}
                />
                <RaisedButton
                    label="Potwierdź i wyślij"
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
export default Confirm
