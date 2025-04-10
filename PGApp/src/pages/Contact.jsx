import React from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the Pynacle Games team</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>Have questions about our games? Want to report a bug or suggest a feature? 
               We'd love to hear from you!</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p><a href="mailto:contact@pynaclegames.com">contact@pynaclegames.com</a></p>
              </div>
              
              <div className="contact-method">
                <h3>Social Media</h3>
                <p>Follow us on <a href="#">Twitter</a> or <a href="#">GitHub</a></p>
              </div>
              
              <div className="contact-method">
                <h3>Discord</h3>
                <p>Join our <a href="#">community Discord</a> to chat with other players</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;