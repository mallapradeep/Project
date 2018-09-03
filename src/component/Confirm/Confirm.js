import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import edit from './edit.svg';
import './Confirm.css';



export default class Confirm extends Component {
    constructor(){
        super()

        this.state = {
            profile: [],
            editFullName: false,
            editEmailAddress: false,
            editStreet: false,
            editCity: false,
            editZip: false,
            editState: false,
            editPhoneNumber: false,
            fullNameInput: 'hidden',
            emailAddressInput: 'hidden',
            streetInput: 'hidden',
            cityInput: 'hidden',
            zipInput: 'hidden',
            stateInput: 'hidden',
            phoneNumberInput: 'hidden',
            fullNameIcon: 'block',
            emailAddressIcon: 'block',
            streetIcon: 'block',
            cityIcon: 'block',
            zipIcon: 'block',
            stateIcon: 'block',
            phoneNumberIcon: 'block'
        }
    }

    componentDidMount() {
        axios.get('/api/accountInfo').then(response => {
            console.log(response);
            this.setState({
              profile: response.data
            });
          });
        }

        showNameInput(){
          this.setState({
            fullNameInput: 'text',
            fullNameIcon: 'none'
          })
        }

        showEmailAddressInput(){
          this.setState({
            emailAddressInput: 'text',
            emailAddressIcon: 'none'
          })
        }

        showStreetInput(){
          this.setState({
            streetInput: 'text',
            streetIcon: 'none'
          })
        }

        showCityInput(){
          this.setState({
            cityInput: 'text',
            cityIcon: 'none'
          })
        }

        showZipInput(){
          this.setState({
            zipInput: 'text',
            zipIcon: 'none'
          })
        }

        showStateInput(){
          this.setState({
            stateInput: 'text',
            stateIcon: 'none'
          })
        }

        showPhoneNumberInput(){
          this.setState({
            phoneNumberInput: 'text',
            phoneNumberIcon: 'none'
          })
        }


  render() {
      let displayProfile = this.state.profile.map((ele, i) => {
          return (
              <div key={i} className='mapped-shipping'>
              <h1>Checkout</h1>

              <div className='ele-div'>
              <div>FullName:{ele.fullname}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>


              <div className='ele-div'>
              <div>EmailAddress:{ele.emailaddress}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>


              <div className='ele-div'>
              <div>Street:{ele.street}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>


              <div className='ele-div'>
              <div>City:{ele.city}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>


              <div className='ele-div'>
              <div>Zip:{ele.zip}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>


              <div className='ele-div'>
              <div>State:{ele.state}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>
             
              <div className='ele-div'>
              <div>PhoneNumber:{ele.phonenumber}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />
                <input type={this.state.fullNameInput} />
              </div>
             
             
             
              
              



              </div>
          )
      })

    return (
      <div className="checkout-form card p-5 w-50">
        <h2>Confirmation Page</h2>
        <div>{displayProfile}</div>
        <Link to="/checkout">
          <button type="button" className="btn btn-success" >
           Confirm
          </button>
        </Link>
      </div>
    )
  }
}
