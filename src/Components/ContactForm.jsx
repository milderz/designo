import React, { useState } from 'react'
import { StyledContactForm } from './Styles/ContactForm.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {

  const [ formSent, setFormSent] = useState(false)
  const [ emptyNameField, setemptyNameField] = useState(false)
  const [ emptyEmailField, setemptyEmailField] = useState(false)
  const [ emptyPhoneField, setemptyPhoneField] = useState(false)
  const [ emptyMessageField, setemptyMessageField] = useState(false)


  const [formData, setFormData] = useState({
   name: "",
   email: "",
   phone: "",
   message: "",
  })

  const handleOnChange = (e) => {
   const name = e.target.name
   const value = e.target.value
   console.log(name, value);

   setFormData((prev) => { 
    return {...prev, [name] : value}
   })

  
  }

  const handleSubmit = (event) => {
   event.preventDefault()

   

   if(formData.name === ""){
    setemptyNameField(true)
   } 
   if(formData.email === "") {
    setemptyEmailField(true)
   }
   if(formData.phone === "") {
    setemptyPhoneField(true)

   }
   if(formData.message === "") {
    setemptyMessageField(true)

   }
   if (formData.name !== "") {
    setemptyNameField(false)
   }
   if (formData.email !== "") {
    setemptyEmailField(false)
   }
   if (formData.phone !== "") {
    setemptyPhoneField(false)
   }
   if (formData.message !== "") {
    setemptyMessageField(false)
   }

   if (formData.name !== "" && formData.email !== "" &&  formData.phone !== "" && formData.message !== "" ) {
    console.log(formData);
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
    }, 5000)

  setFormData({
   name: "",
   email: "",
   phone: "",
   message: "",
  })
   }
  


  }

  


  return (
    <StyledContactForm onSubmit={handleSubmit}>

     <header>
      <h3>Contact Us</h3>
      <p> Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line. </p>
     </header>

     {formSent ? (<>
     
     <div className="sent-message">
      <FontAwesomeIcon icon={faPaperPlane} />
      <p>Your message was sent succesfully</p>
      </div>
     </>) : (<div className="form-fields">
      <input type="text" name="name" placeholder='Name' className={`${emptyNameField && "empty-input"}`} onChange={handleOnChange}/>
      <input type="email" name="email" placeholder='Email' className={`${emptyEmailField && "empty-input"}`}  onChange={handleOnChange}/>
      <input type="text" name="phone" placeholder='Phone' className={`${emptyPhoneField && "empty-input"}`}  onChange={handleOnChange}/>
      <textarea name="message" placeholder='Message'className={`${emptyMessageField && "empty-input"}`} onChange={handleOnChange}></textarea>
      <button className='submit-form'>SUBMIT</button>
     </div>)}
     
      
     
      
    </StyledContactForm>
  )
}

export default ContactForm
