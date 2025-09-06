import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactComponent.css'; 
import { FaPhone,FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_uqx3y4o', 'template_emy30zh', form.current, {
      publicKey: 'yte_q2cgPEzt584Ed',
    })
    .then(() => {
      toast.success('Message sent successfully!');
    form.current.reset();
    }, (error) => {
      toast.error('Failed to send message. Please try again.');
      console.log(error.text);
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h4>Get In Touch</h4>
        <h2>Let’s Talk and <span>make Connection</span></h2>
        <p>Discuss a project or just want to say hi? Connect with me via email or through a phone call.</p>
        <ul className="contact-points">
          <li><FaCheckCircle /> BTech CSE AIML</li>
          <li><FaCheckCircle /> Fullstack Developer</li>
          <li><FaCheckCircle /> Software Developer</li>
          <li><FaCheckCircle /> AI&ML</li>
          <li><FaCheckCircle /> Team Work</li>
        </ul>
        <div className="contact-icons">
          <a href="https://github.com/dinabandhu2004" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dinabandhu-barai-802668244/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:dinabandhu2004barai@gmail.com"><FaEnvelope /></a>
          <a href="https://www.instagram.com/dinabandhu__barai?igsh=anA3ODA0bXAwNGg4"><FaInstagram /></a>
          <a href="https://drive.google.com/uc?export=download&id=1ubTmmZAIPSEFgKE3BWRQp_ubJdeet3w_" download="Dinabandhu_Barai_CV.pdf" title='CV'><FaFileDownload/></a>
        </div>
        <ul className='contact-points'>
            <li><FaPhone/> +91 9748155048</li>
        </ul>
      </div>

      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" name="phone" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="title" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required />
          </div>
          <button type="submit" className="send-button">Send Message </button>
        </form>
      </div>
      <ToastContainer className="response" position="bottom-right" autoClose={3000} theme="dark" />

    </div>
  );
};

export default ContactComponent;
