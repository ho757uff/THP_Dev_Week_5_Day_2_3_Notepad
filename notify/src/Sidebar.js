// Définition du composant Sidebar
const Sidebar = ({
  notes, // Liste des notes à afficher dans la barre latérale
  onAddNote, // Fonction pour ajouter une nouvelle note
  onDeleteNote, // Fonction pour supprimer une note
  activeNote, // ID de la note active
  setActiveNote, // Fonction pour définir la note active
}) => {

  // Tri par date de modification
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  // Rendu du composant Sidebar, pour la navigation
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button> {/* Ajouter une nouvelle note */}
      </div>
      <div className="app-sidebar-notes">
        {/* On fait un mapping sur la liste des notes pour afficher chaque note dans la barre latérale */}
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
            key={id} // Clé unique pour chaque note
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong> {/* Titre de la note */}
              <button onClick={(e) => onDeleteNote(id)}>Delete</button> {/* Bouton pour supprimer la note */}
            </div>
            <p>{body && body.substr(0, 100) + "..."}</p> {/* Extrait du contenu de la note */}
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small> {/* Date de dernière modification de la note */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; // Exportation du composant Sidebar
