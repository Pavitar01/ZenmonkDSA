import React from "react";
import { useDispatch, useSelector } from "react-redux";
import One from "../Template/One";
import Two from "../Template/Two";
import Three from "../Template/Three";
import { delCard } from "../Redux/Store/Slice/ResumeSlice";

const AllDrafts = ({ setAllDraft, allDraft, handleCardClick }) => {
  const dispatch = useDispatch();

  const draft = useSelector((state) => {
    return state.resumeData.Draft;
  });
  return (
    <div className="AllSavedDraft">
      <div className="top">
        <button
          onClick={() => {
            setAllDraft(false);
          }}
        >
          {allDraft ? "Close Draft" : "Show All Draft"}
        </button>
        <h1
          style={{ textAlign: "center", width: "100%", marginRight: "150px" }}
        >
          All Saved Draft
        </h1>
      </div>

      <div className="draftsCard">
        {draft.map((item) => {
          return item.Draft.map((i, index) => {
            return (
              <div key={index} className="preview-card" onClick={() => {}}>
                <button
                  onClick={() => {
                    handleCardClick(i);
                    setAllDraft(false);
                    dispatch(delCard(index));
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch(delCard(index));
                  }}
                >
                  Delete
                </button>
                {i.template === 1 && (
                  <One
                    details={{
                      name: i.name,
                      address: i.address,
                      designation: i.designation,
                      experience: i.experience,
                      objective: i.objective,
                      project: i.project,
                      skill: i.skill,
                      social: i.skill,
                      image: i.image,
                      PhoneNumber: i.PhoneNumber,
                    }}
                  />
                )}
                {i.template === 2 && (
                  <Three
                    details={{
                      name: i.name,
                      address: i.address,
                      designation: i.designation,
                      experience: i.experience,
                      objective: i.objective,
                      project: i.project,
                      skill: i.skill,
                      social: i.skill,
                      image: i.image,
                      PhoneNumber: i.PhoneNumber,
                    }}
                  />
                )}
                {i.template === 3 && (
                  <Two
                    details={{
                      name: i.name,
                      address: i.address,
                      designation: i.designation,
                      experience: i.experience,
                      objective: i.objective,
                      project: i.project,
                      skill: i.skill,
                      social: i.skill,
                      image: i.image,
                      PhoneNumber: i.PhoneNumber,
                    }}
                  />
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default AllDrafts;
