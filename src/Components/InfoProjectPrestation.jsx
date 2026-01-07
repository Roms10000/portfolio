import { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export default function InfoProjectPrestation() {
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
              Site de demande de prestation
            </DialogTitle>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-white">
              Deuxième projet de groupe (3 personnes) réalisé durant ma formation, mené en sprint de deux semaines.
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Obejctifs techniques :</div> 
                - Intégrer une solution de paiement en ligne sécurisée et fonctionnelle. <br/>
                - Implémenter la génération dynamique de documents PDF (devis et factures).<br/>
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Problématique :</div> Comment automatiser et simplifier le processus de demande de devis, de facturation et de paiement pour une entreprise de services informatiques, tout en offrant une expérience fluide et sécurisée aux clients ?
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Description :</div> Ce site web permet aux utilisateurs de formuler une demande de devis pour différentes prestations informatiques ou de développement web. Les devis sont transmis au gestionnaire de l’entreprise, qui peut les accepter et les transformer automatiquement en factures. Une fois la facture générée, le client peut procéder au paiement directement en ligne via la plateforme.
              </p>
              <p className="text-base leading-relaxed text-white">
                <div className='font-bold underline underline-offset-4'>Technos/Librairies utilisées :</div>
                Symfony / Tailwindcss / React / Paypal developer
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
