// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.
import React from "react";
import SocialCard from '../Social-Card/Social-Card';    
import '../Contact-Form/Contact-Form.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div className="contact-parent-box">
            <div className="section-header">
               <div className="section-header-title">Contact</div>
               <img alt="Contact me" className="section-header-icon" src={require('../../assets/contact.png')}></img>
            </div>
            <div className="social-parent-box">
                <SocialCard></SocialCard>
                <div className="separator">  or simply  </div>
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/mdopebwn"
                    method="POST">
                    <div className="contact-form">    
                        <div className="contact-form-fields-box">
                            <label for="contact-name" className="contact-form-labels">Name:</label>
                            <input id="contact-name" className="contact-form-input" placeholder="Your Name" type="text" name="name" />
                        </div>                
                        <div className="contact-form-fields-box">
                            <label for="contact-email" className="contact-form-labels">Email:</label>
                            <input id="contact-email" className="contact-form-input" placeholder="Your e-mail" type="email" name="email" />
                        </div>
                        <div className="contact-form-fields-box">
                            <label for="contact-msg" className="contact-form-labels">Message:</label>
                            <textarea id="contact-msg" className="contact-form-input" placeholder="Your message" name="message" />
                        </div>
                        <div className="contact-form-submit-btn-box">
                            {status === "SUCCESS" ? <p>Thanks for contacting. I'll get back to you!</p> : <button className="contact-form-submit-btn">SEND</button>}
                            {status === "ERROR" && <p>Oops! There was an error.</p>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}