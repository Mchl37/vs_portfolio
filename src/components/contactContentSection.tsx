import React from 'react';
import { Alice } from "next/font/google";
import { Montserrat } from "next/font/google";

const alice = Alice({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"] });

function ContactContentSection() {
  return (
    <div className="contactContentSection">
      <form action="#">
        <div className="form-item">
          <label className={ alice.className } htmlFor="fname">Quel est votre nom ?</label>
          <input className={ montserrat.className } type="text" id="name" name="name" placeholder="Indiquez votre nom complet"></input>
        </div>
        <div className="form-item">
          <label className={ alice.className } htmlFor="email">Quel est votre adresse mail ?</label>
          <input className={ montserrat.className } type="email" id="email" name="email" placeholder="Indiquez votre adresse mail"></input>
        </div>
        <div className="form-item">
          <label className={ alice.className } htmlFor="subject">Que puis-je pour vous ?</label>
          <input className={ montserrat.className } type="text" id="message" name="message" placeholder="Je souhaite ..."></input>
          {/* <textarea id="subject" name="subject" placeholder="Je souhaite ..."></textarea> */}
        </div>
        <input type="submit" value="Envoyer !"></input>
      </form>
    </div>
  );
}

export default ContactContentSection;
