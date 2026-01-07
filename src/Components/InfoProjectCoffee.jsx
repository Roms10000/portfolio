import { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export default function InfoProjectCoffee() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
      >
        <FaInfoCircle size={20} className="text-black" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        {/* Container centré */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-3xl rounded-lg bg-zinc-800 p-10 shadow-xl">
            <DialogTitle className="text-xl font-bold mb-6 text-center text-white underline underline-offset-4">
              Site E-commerce Coffee Time
            </DialogTitle>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-white">
              Projet de fin de formation réalisé en groupe (2 personnes) présenté lors de ma certification pour obtenir mon diplôme BAC +2 de développeur web et web mobile.
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Objectif technique :</div> 
                - Mettre en place un système d’authentification hautement sécurisé basé sur JWT, avec gestion des refresh tokens et protection des sessions.<br/>
                - Concevoir une interface UI/UX originale, intuitive et responsive, intégrant des éléments 3D immersifs pour enrichir l’expérience utilisateur.<br/>
                - Développer un parcours e-commerce complet incluant la gestion du panier et l’intégration d’un système de paiement en ligne sécurisé via Stripe.
                </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Problématique :</div> Comment permettre à une boutique de café de prolonger l’expérience en magasin à domicile, en offrant aux clients la possibilité de reproduire fidèlement leurs cafés préférés tout en intégrant une plateforme e-commerce sécurisée et immersive ?
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Description :</div> Ce site e-commerce met en valeur différentes créations de cafés proposées par une boutique spécialisée, en présentant leurs recettes et les ingrédients nécessaires à leur réalisation. Les utilisateurs peuvent consulter les recettes, acheter l’ensemble des ingrédients correspondants et recréer chez eux leurs cafés préférés avec exactement les mêmes produits que ceux utilisés en boutique.
                La plateforme propose une authentification hautement sécurisée, une interface UI/UX immersive intégrant des éléments 3D sur la page d’accueil, ainsi qu’un parcours e-commerce complet incluant catalogue de produits avec filtres, panier et paiement en ligne via Stripe.
              </p>
                <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Technos/Librairies utilisées :</div>
                Symfony / React / Tailwindcss / ThreeJS / R3F / Drei / Blender / STRIPE
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-white hover:bg-gray-200 text-black font-medium rounded-lg px-5 py-2.5 cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}