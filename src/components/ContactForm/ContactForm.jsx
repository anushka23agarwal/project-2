import styles from "./contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { HiMail } from "react-icons/hi";

import { useState } from "react";



const ContactForm = () => {

  const [name,setName]=useState("anushka");


let email="agarwal";
let text="text";

const onViaCallSubmit = () =>{
    alert("call");
};



const onSubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    email=event.target[1].value;
    text=event.target[2].value
    
}



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button  onClick={onViaCallSubmit}
          text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form
        onSubmit={onSubmit}
        >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">email</label>
            <textarea type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name="text" rows={8} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>

          {/* <div>
            {name ="",email="",text=""}
          </div> */}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./images/contact.svg" alt="alternate image" />
      </div>

      
    </section>
  );
};

export default ContactForm;
