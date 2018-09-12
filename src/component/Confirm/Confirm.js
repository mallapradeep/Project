import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import edit from './edit.svg';
import './Confirm.css';
import {connect} from 'react-redux';
import StripeCheckout from "react-stripe-checkout";


 class Confirm extends Component {
    constructor(props){
        super(props)

        this.state = {
            profile: [],
            editFullName: false,
            editEmailAddress: false,
            editStreet: false,
            editCity: false,
            editZip: false,
            editState: false,
            editPhoneNumber: false,

            hideFullNameInput: 'hidden',
            hideEmailAddressInput: 'hidden',
            hideStreetInput: 'hidden',
            hideCityInput: 'hidden',
            hideZipInput: 'hidden',
            hideStateInput: 'hidden',
            hidePhoneNumberInput: 'hidden',

            fullNameIcon: 'block',
            emailAddressIcon: 'block',
            streetIcon: 'block',
            cityIcon: 'block',
            zipIcon: 'block',
            stateIcon: 'block',
            phoneNumberIcon: 'block',
            showButton: 'hidden',

            fullNameEdit: '',
            emailAddressEdit: '',
            streetEdit: '',
            cityEdit: '',
            zipEdit: '',
            stateEdit: '',
            phoneNumberEdit: '',

            amount: 10000

        }
      }
      
      componentDidMount() {
        this.getAccountInfo()
        
      }

      //for stripe n take it to the TY page
      onToken = token => {
        token.card = void 0;
        axios
          .post("/api/checkout", { token, amount: this.state.amount })
          .then(res => {
            this.props.history.push('/thankyou')
          });
      };

      //nodemailer
      sendEmail(obj){
        axios.post('/api/send', obj)
      }
     
      
      getAccountInfo(){
        axios.get('/api/accountInfo').then(response => {
          console.log(response);
          this.setState({
            profile: response.data
          });
        });
      }
      
      setToDefault(){
        this.setState({
          hideFullNameInput: 'hidden',
          hideEmailAddressInput: 'hidden',
          hideStreetInput: 'hidden',
          hideCityInput: 'hidden',
          hideZipInput: 'hidden',
          hideStateInput: 'hidden',
          hidePhoneNumberInput: 'hidden',

          hideFullNameIcon: 'block',
          hideEmailAddressIcon: 'block',
          hideStreetIcon: 'block',
          hideCityIcon: 'block',
          hideZipIcon: 'block',
          hideStateIcon: 'block',
          hidePhoneNumberIcon: 'block'
        })
      }
      
        showNameInput(){
          this.setState({
            hideFullNameInput: 'text',
            fullNameIcon: 'none',
            showButton: 'visible'
          })
        }

        showEmailAddressInput(){
          this.setState({
            hideEmailAddressInput: 'text',
            emailAddressIcon: 'none',
            showButton: 'visible'

          })
        }

        showStreetInput(){
          this.setState({
            hideStreetInput: 'text',
            streetIcon: 'none',
            showButton: 'visible'

          })
        }

        showCityInput(){
          this.setState({
            hideCityInput: 'text',
            cityIcon: 'none',
            showButton: 'visible'

          })
        }

        showZipInput(){
          this.setState({
            hideZipInput: 'text',
            zipIcon: 'none',
            showButton: 'visible'

          })
        }

        showStateInput(){
          this.setState({
            hideStateInput: 'text',
            stateIcon: 'none',
            showButton: 'visible'

          })
        }

        showPhoneNumberInput(){
          this.setState({
            hidePhoneNumberInput: 'text',
            phoneNumberIcon: 'none',
            showButton: 'visible'

          })
        }

        //for all the handleChange method
        handleChange(e) {
          let { name, value } = e.target

          this.setState({
            [name]: value
          })
        }
        handleFullName(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editNameInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })   
          }
        }

        handleEmailAddress(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editEmailAddressInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }

        handleStreet(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editStreetInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }

        handleCity(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editCityInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }

        handleZip(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editZipInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }

        handleState(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editStateInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }

        handlePhoneNumber(e,id,text) {
          if(e.key ==='Enter'){
            axios.put(`/api/editPhoneNumberInfo/${id}`,{text})
            .then(resp=> {
            this.getAccountInfo()
            this.setToDefault()
            })
          }
        }



  render() {
      let displayProfile = this.state.profile.map((ele, i) => {
        console.log(ele);
          return (
              <div key={i} className='mapped-shipping'>
              <h1>Checkout</h1>

              <div className='ele-div'>
              <div>FullName: {ele.fullname}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showNameInput()}
                style={{display: `${this.state.fullNameIcon}`}} />

                <input 
                name='fullNameEdit'
                // value={this.state.fullNameEdit}
                type={this.state.hideFullNameInput}
                onChange={e => this.handleChange(e)}
                onKeyPress={(e)=> this.handleFullName(e,ele.user_id, this.state.fullNameEdit)} /><hr/>
              </div>


              <div className='ele-div'>
              <div>EmailAddress: {ele.emailaddress}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showEmailAddressInput()}
                style={{display: `${this.state.emailAddressIcon}`}} />
                <input
                 name='emailAddressEdit'
                 value={this.state.emailAddressEdit}
                 type={this.state.hideEmailAddressInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handleEmailAddress(e,ele.user_id, this.state.emailAddressEdit )}
                  /><hr/>
              </div>
  

              <div className='ele-div'>
              <div>Street: {ele.street}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showStreetInput()}
                style={{display: `${this.state.streetIcon}`}} />
                 <input
                  name='streetEdit'
                 value={this.state.streetEdit}
                 type={this.state.hideStreetInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handleStreet(e,ele.user_id, this.state.streetEdit )}
                  /><hr/>
              </div>


              <div className='ele-div'>
              <div>City:{ele.city}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showCityInput()}
                style={{display: `${this.state.cityIcon}`}} />
               <input
                name='cityEdit'
                 value={this.state.cityEdit}
                 type={this.state.hideCityInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handleCity(e,ele.user_id, this.state.cityEdit )}
                  /><hr/>
              </div>


              <div className='ele-div'>
              <div>Zip: {ele.zip}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showZipInput()}
                style={{display: `${this.state.zipIcon}`}} />
              <input
                name='zipEdit'
                 value={this.state.zipEdit}
                 type={this.state.hideZipInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handleZip(e,ele.user_id, this.state.zipEdit )}
                  /><hr/>
              </div>


              <div className='ele-div'>
              <div>State: {ele.state}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this.showStateInput()}
                style={{display: `${this.state.stateIcon}`}} />
               <input
                name='stateEdit'
                 value={this.state.stateEdit}
                 type={this.state.hideStateInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handleState(e,ele.user_id, this.state.stateEdit )}
                  /><hr/>
              </div>
             
              <div className='ele-div'>
              <div>PhoneNumber: {ele.phonenumber}</div>
              <img height='20px' width='20px' src={edit} alt='edit' 
                onClick={()=> this. showPhoneNumberInput()}
                style={{display: `${this.state.phoneNumberIcon}`}} />
                <input
                name='phoneNumberEdit'
                 value={this.state.phoneNumberEdit}
                 type={this.state.hidePhoneNumberInput}
                 onChange={e => this.handleChange(e)}
                 onKeyPress={(e)=> this.handlePhoneNumber(e,ele.user_id, this.state.phoneNumberEdit )}
                  /><hr/>
              </div>
             
             
             
              
              



              </div>
          )
      })

    return (
      <div className="checkout-form card p-5 w-50">
        <h2>Confirmation Page</h2>
        <div>{displayProfile}</div>
        
        <Link to="/checkout">
          <button type="button" className="btn btn-success" onClick={()=>this.sendEmail({text: 'Thank you for Shopping!! Your Purchas will be delivered within 3 days'})}>
           Confirm
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    total:state.total
  }
}

export default connect(mapStateToProps, {})(Confirm);
