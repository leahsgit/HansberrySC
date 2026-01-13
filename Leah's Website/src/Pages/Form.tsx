import { User, Mail, MessageSquare, Send, Phone } from "lucide-react";
import "./Form.css";
import TTSButton from "../components/TextToSpeechButton";

export function Form() {
   const FormText = `
      Contact Me. 

      If you would like to get in touch, please fill out the form below.  

      Name.
      Email.
      Message.

      Submit.

      Alternatively, you can contact me directly via phone or email.

      Phone: 0448 869 391.

      Email: leah@hansberrysc.com.au.

      I'm really looking forward to meeting you and helping as much as I can! 
    `;
  return (
    <div className="contact-container">
       <TTSButton text={FormText} />
      <h2><span className="extended-underline">Contact Me</span></h2>
       <h3>If you would like to get in touch, please fill out the form below:</h3>

      <hr />  {/* Horizontal rule styling for form, delete this if you dont want line seperating form from "get in touch" text.*/}

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        {/* Web3Forms key */}
        <input
          type="hidden"
          name="access_key"
          value="8f2550ec-5a62-44e4-a99e-3306f6036591"
        />

        {/* Name */}
        <label htmlFor="name" className="form-label-with-icon">
          <User size={20} />
          <span>Name:</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        {/* Email */}
        <label htmlFor="email" className="form-label-with-icon">
          <Mail size={20} />
          <span>Email:</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        {/* Message */}
        <label htmlFor="message" className="form-label-with-icon">
          <MessageSquare size={20} />
          <span>Message:</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
        />

        {/* Submit */}
        <button type="submit" className="submit-button-with-icon">
          <Send size={20} />
          <span>Submit</span>
        </button>
      </form>

      <h3>Alternatively, you can contact me directly via Phone or Email</h3>
      <p className="contact-info-with-icon">
        <Phone size={18} />
        <span>Phone: 0448 869 391</span>
      </p>
      <p className="contact-info-with-icon">
        <Mail size={18} />
        <span>Email: leah@hansberrysc.com.au</span>
      </p>
      <p>I'm really looking forward to meeting you and helping as much as I can!</p>

    </div>
  )
}

export default Form