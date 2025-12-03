import React from 'react';

const CreateSuggestionModal = ({ newSuggestion, setNewSuggestion, handleCreateSuggestion, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content create-suggestion-modal-content">
        <button
          onClick={onClose}
          className="modal-close-button"
        >
          ✕
        </button>
        <h2 className="modal-title">New Suggestion</h2>
        <div className="modal-form-container">
          <div className="modal-input-row">
            <div className="modal-input-col">
              <label className="modal-label">Title:</label>
              <input
                type="text"
                placeholder="Title"
                className="modal-input"
                value={newSuggestion.title}
                onChange={(e) => setNewSuggestion({...newSuggestion, title: e.target.value})}
              />
            </div>
            <div className="modal-input-col">
              <label className="modal-label">Category:</label>
              <input
                type="text"
                placeholder="Category"
                className="modal-input"
                value={newSuggestion.category}
                onChange={(e) => setNewSuggestion({...newSuggestion, category: e.target.value})}
              />
            </div>
          </div>
          <div>
            <label className="modal-label">Description</label>
            <textarea
              placeholder="Input feedback description..."
              className="modal-textarea"
              value={newSuggestion.description}
              onChange={(e) => setNewSuggestion({...newSuggestion, description: e.target.value})}
            />
          </div>
          <button
            onClick={handleCreateSuggestion}
            className="modal-button"
          >
            CREATE SUGGESTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSuggestionModal;