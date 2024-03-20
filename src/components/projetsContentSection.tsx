import React from 'react';
import { Alice } from "next/font/google";

const alice = Alice({ subsets: ["latin"], weight: "400" });

function ProjetsContentSection() {
  return (
    <div className="projetsContentSection">
      <div className="card">
        <div className="card-left">
          <p className={ alice.className }>2021</p>
        </div>
        <div className="card-right">
          <div className="card-header">
            <h3 className={ alice.className }>NOZAMA</h3>
            <p className={ alice.className }>Site e-commerce</p>
          </div>
          <p>Le projet de site e-commerce utilise les technologies React et Node.js pour créer une interface utilisateur réactive et gérer les aspects serveur. L&apos;intégration de Stripe assure un processus de paiement sécurisé. L&apos;objectif est de fournir une plateforme techniquement solide pour la vente de produits écologiques et durables, répondant ainsi aux attentes des consommateurs soucieux de l&apos;environnement.</p>
          <div className="buttons">
            <button className={ alice.className }>React</button>
            <button className={ alice.className }>Node</button>
            <button className={ alice.className }>JavaScript</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-left">
          <p className={ alice.className }>2021</p>
        </div>
        <div className="card-right">
          <div className="card-header">
            <h3 className={ alice.className }>NOZAMA</h3>
            <p className={ alice.className }>Site e-commerce</p>
          </div>
          <p>Le projet de site e-commerce utilise les technologies React et Node.js pour créer une interface utilisateur réactive et gérer les aspects serveur. L&apos;intégration de Stripe assure un processus de paiement sécurisé. L&apos;objectif est de fournir une plateforme techniquement solide pour la vente de produits écologiques et durables, répondant ainsi aux attentes des consommateurs soucieux de l&apos;environnement.</p>
          <div className="buttons">
            <button className={ alice.className }>React</button>
            <button className={ alice.className }>Node</button>
            <button className={ alice.className }>JavaScript</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-left">
          <p className={ alice.className }>2021</p>
        </div>
        <div className="card-right">
          <div className="card-header">
            <h3 className={ alice.className }>NOZAMA</h3>
            <p className={ alice.className }>Site e-commerce</p>
          </div>
          <p>Le projet de site e-commerce utilise les technologies React et Node.js pour créer une interface utilisateur réactive et gérer les aspects serveur. L&apos;intégration de Stripe assure un processus de paiement sécurisé. L&apos;objectif est de fournir une plateforme techniquement solide pour la vente de produits écologiques et durables, répondant ainsi aux attentes des consommateurs soucieux de l&apos;environnement.</p>
          <div className="buttons">
            <button className={ alice.className }>React</button>
            <button className={ alice.className }>Node</button>
            <button className={ alice.className }>JavaScript</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetsContentSection;
