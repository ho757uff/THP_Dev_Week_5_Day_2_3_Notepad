//Imports
import { useState } from 'react'; // hook useState depuis React
import './App.css'; // CSS
import Sidebar from './Sidebar'; // Comp Sidebar
import Main from './Main'; // Comp Main

function App() {
  // Déclaration de deux états avec le hook useState
  const [notes, setNotes] = useState([]); // 1er État pour stocker les notes
  const [activeNote, setActiveNote] = useState(false); // 2e État pour stocker la note active, initialisé à false par défaut

  // Ajouter une nouvelle note
  const onAddNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 100000000), // Pas réussi avec uuid donc je triche :pp
      title: "Note sans titre", // Titre par défaut pour la nouvelle note
      body: "", // Contenu par défaut pour la nouvelle note
      lastModified: Date.now(), // Date de dernière modification de la note, définie à l'instant actuel
    };

    setNotes([newNote, ...notes]); // Mise à jour de l'état des notes en ajoutant la nouvelle note au début du tableau
  };

  // Supprimer une note
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete)); // Mise à jour de l'état des notes en filtrant les notes pour exclure celle avec l'ID à supprimer
  };

  // MAJ une note existante
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote; // Retourne la note mise à jour si son ID correspond à celui de la note mise à jour
      }

      return note; // Retourne la note inchangée sinon, magic™
    });

    setNotes(updatedNotesArr); // Met à jour l'état des notes avec le nouveau tableau de notes mis à jour
  };

  // Récupéreration de la note active, pour le highlight + MAJ
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote); // Retourne la note dont l'ID correspond à celui de la note active
  };

  // Rendu de l'application avec le composant Sidebar et le composant Main
  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App; // Exportation du composant App
