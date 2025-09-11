import React, {useState} from 'react';

export default function Formulaire() {

    const [description, setDescription] = useState("");
    const [objet, setObjet] = useState("");
    const maxLength = 750;
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const response = await fetch("https://formspree.io/f/mrbaolbg", {
            method:"POST",
            body: new FormData (form),
            headers: {Accept: "application/json"},
        });

        if(response.ok) {
            setStatus("✅ Envoi de la demande réussi !");
            setDescription("");
            setObjet("");
            form.reset();
        }else{
            setStatus("❌ Une erreur est survenue, veuillez réessayer.")
        }
    };

return (
<>
    <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-white">Adresse e-mail</label>
            <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="JohnDoe@mail.com" required />
        </div>
        <div className='flex gap-3'>
            <div class="mb-5">
                <label for="nom" class="block mb-2 text-sm font-medium text-white">Nom</label>
                <input type="txt" name="nom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
            </div>
            <div class="mb-5">
                <label for="prenom" class="block mb-2 text-sm font-medium text-white">Prénom</label>
                <input type="txt" name="prenom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe" required />
            </div>
        </div>
        <div class="mb-5">
            <label for="objet" class="block mb-2 text-sm font-medium text-white">Objet</label>
            <select name="objet" value={objet} onChange={(e) => setObjet(e.target.value)} required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Doe">
                <option value="" selected disabled>Choisissez un objet --</option>
                <option className="" value="prestation">Demande de prestations</option>
                <option className="opt" value="conseil">Demande d'informations</option>
                <option className="opt" value="carriere">Carrière</option>
                <option className="opt" value="autre">Autre</option>
            </select>
        </div>
        <div class="mb-5">
            <label for="description" class="block mb-2 text-sm font-medium text-white">Description</label>
            <textarea rows="5" cols="20" name="description" maxLength={maxLength} value={description} onChange={(e) => setDescription(e.target.value)} id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            <p className="text-sm text-gray-500 mt-1 text-right">{description.length} / {maxLength}</p>
        </div>
        <div className='flex justify-center'>
            <button type="submit" className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer">Envoyer</button>
        </div>
    </form>

      {status && (
        <p className="mt-4 text-center text-sm font-medium text-green-600">
          {status}
        </p>
      )}
</>          
    )
}