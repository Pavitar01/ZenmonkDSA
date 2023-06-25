import One from "../Template/One";
import Three from "../Template/Three";
import Two from "../Template/Two";

export const DraftPopup = ({
  drafts,
  setDrafts,
  setIsDraftPopupOpen,
  saveDraft,
  allDraft,
  setAllDraft,
}) => {
  return (
    <div className="draft-popup">
      {drafts.map((draft, index) => (
        <div key={index} className="draft-item">
          {draft.templates.template === 1 && <One details={draft.templates} />}
          {draft.templates.template === 2 && <Two details={draft.templates} />}
          {draft.templates.template === 3 && (
            <Three details={draft.templates} />
          )}
          <button
            onClick={() => setDrafts(drafts.filter((_, i) => i !== index))}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="over">
        <button onClick={saveDraft}>Save As Draft</button>
        <button
          onClick={() => {
            setAllDraft(true);
            setIsDraftPopupOpen(false);
          }}
        >
          Show All Draft
        </button>
      </div>
    </div>
  );
};
