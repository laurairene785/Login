import ModalDropdown from 'react-native-modal-dropdown';
import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';



const options = []
app.get('/api/', (req, res) => {
  res.send(options);
});
import React from 'react';

import axios from 'axios';

export default class optionList extends React.Component {
  state = {
    options: []
  }

  componentDidMount() {
    axios.get(`https://exceellentsms/api/index.php/`)
      .then(res => {
        const options = res.data;
        this.setState({ options });
      })
  }

  render() {
    return (
      <ul>
        { this.state.options.map(option => <li>{option.name}</li>)}
      </ul>
    )
  }
}
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    alert('phonenumber ' + this.state.value);
    event.preventDefault();
 
  }
  
handleClick(){
  app.post('https://excellentsms/api//index.php/' , (req, res)=>{
  
      if(!req.body.requestId || !req.body.code){
          req.status(400).send({message: 'introduzca un codigo'})
          return;
  
      }
      nexmo.verify.check({
          request_id : req.body.requestId,
          code : req.body.code},
          (err, result)=> {
              if(err){
                  req.status(500).send(err.error_text);
                  return;
              }
              res.send(result);
  
          });
  
      });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Registrar numero telefonico
          <ModalDropdown options={[options]}>
            ...
        </ModalDropdown>

          <textarea value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Enviar" />
        <button onClick={this.handleClick}>Enviar</button>
      </form>
    );
  }
  


  async _cod() {
    var DEMO_TOKEN = await AsyncStorage.getItem(STORAGE_KEY);
    fetch("https://www.excellentsms.net/index.php/api/sms", {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + DEMO_TOKEN
      }
    })
      .then((response) => response.text())
      .then((quote) => {
        AlertIOS.alert(
          "Este es el codigo:", quote)
      })
      .done();
  };

  styles = StyleSheet.create({
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#7DE24E',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
    successTextStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
      padding: 30,
    },
  })};