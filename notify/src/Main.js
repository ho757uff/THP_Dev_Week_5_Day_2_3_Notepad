import ReactMarkdown from "react-markdown";

// Définition du composant Main
const Main = ({ activeNote, onUpdateNote }) => {

  // MAJ le champ d'une note lorsqu'il est modifié
  const onEditField = (field, value) => {
    onUpdateNote({ // Appel de la fonction onUpdateNote avec la note mise à jour
      ...activeNote,
      [field]: value, // Mise à jour du champ spécifié avec la nouvelle valeur
      lastModified: Date.now(), // Mise à jour de la date de dernière modification de la note
    });
  };

  // Rendu du composant Main
  return (
    <div className="app-main">
      {/* Section pour éditer la note */}
      <div className="app-main-note-edit">
        {/* Champ d'entrée pour le titre de la note */}
        <input
          type="text"
          id="title"
          placeholder="Note Title"
          value={activeNote.title} // Valeur du titre de la note
          onChange={(e) => onEditField("title", e.target.value)} // Appel de la fonction onEditField lorsqu'il y a un changement dans le champ titre
          autoFocus // Focus automatique sur le champ titre
        />
        {/* Champ de texte pour le contenu de la note */}
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body} // Valeur du corps de la note
          onChange={(e) => onEditField("body", e.target.value)} // Appel de la fonction onEditField lorsqu'il y a un changement dans le champ corps de la note
        />
      </div>
      {/* Section pour prévisualiser la note */}
      <div className="app-main-note-preview">
        {/* Titre de la note */}
        <h1 className="preview-title">{activeNote.title}</h1>
        {/* Prévisualisation du contenu de la note avec ReactMarkdown */}
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main; // Exportation du composant Main
