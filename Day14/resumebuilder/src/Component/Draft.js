import One from "../Template/One";
import Three from "../Template/Three";
import Two from "../Template/Two";

export const DraftPopup = ({drafts,setDrafts,setIsDraftPopupOpen,saveDraft,AllDraft}) => {
    return (
      <div className="draft-popup">
        <h2>Drafts</h2>
        {drafts.map((draft, index) => (
          <div key={index} className="draft-item">
            {draft.templates.template === 1 && <One details={draft.templates} />}
            {draft.templates.template === 2 && <Two details={draft.templates} />}
            {draft.templates.template === 3 && <Three details={draft.templates} />}
            <button
              onClick={() => setDrafts(drafts.filter((_, i) => i !== index))}
            >
              Delete
            </button>
          </div>
        ))}
        <button onClick={() => setIsDraftPopupOpen(false)}>Close</button>
        <button onClick={saveDraft}>Save Draft</button>
        <button onClick={AllDraft}>Open All Draft</button>
      </div>
    );
  };