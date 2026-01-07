import { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

export default function InfoProjectReservation() {
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
              Site de demande de réservation
            </DialogTitle>

            <div className="space-y-4">
                <p className="text-base leading-relaxed text-white">
                Tout premier projet de groupe (4 personnes) réalisé durant ma formation, effectuer en 1 mois.
                </p>
                <p className="text-base leading-relaxed text-white">
                    <div className='font-bold underline underline-offset-4'>Objectif technique :</div> 
                    - Mettre en place un système d’authentification avec gestion des rôles, offrant des accès et des vues différenciés selon le profil utilisateur.<br/>
                    - Concevoir une interface UI/UX claire, intuitive et responsive intégrant un calendrier interactif pour la gestion et le suivi des réservations.<br/>
                    - Travailler en équipe sur un même projet en appliquant des méthodes de collaboration et d’organisation du développement.
                </p>
                <p className="text-base leading-relaxed text-white">
                    <div className='font-bold underline underline-offset-4'>Problématique :</div> Comment centraliser et gérer efficacement les réservations d’une salle des fêtes communale en tenant compte des différents acteurs impliqués, de leurs rôles et de leurs besoins spécifiques, tout en évitant les conflits de planning ?
                </p>
                <p className="text-base leading-relaxed text-white">
                    <div className='font-bold underline underline-offset-4'>Description :</div> Ce site web permet de gérer les réservations d’une salle des fêtes communale via un calendrier interactif. Selon leur rôle, les utilisateurs disposent de droits spécifiques : les membres d’associations peuvent effectuer des demandes de réservation, la femme de ménage peut réserver des créneaux dédiés à l’entretien, et l’administrateur peut valider les réservations, suivre les interventions et consulter les commentaires associés aux événements du calendrier.
                </p>
                <p className="text-base leading-relaxed text-white">
                    <div className='font-bold underline underline-offset-4'>Technos/Librairies utilisées :</div>
                    Php natif / CSS natif / JS natif / FullCalendar
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