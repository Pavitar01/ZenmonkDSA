import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { updateNote } from "../Redux/slice";

const Bigcard2 = ({ title, des, arr, setArr, setToggledit,index }) => {
  const [newtitle, setNewtitle] = useState(title);
  const [desc, setNewdes] = useState(des);
  const [err, setErr] = useState("");
  //   tools]
  const dispatch = useDispatch();
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ],
  };

  const temp={
    title:newtitle,
    des:desc
  }
  const handleSubmit = () => {
    if (!newtitle || !desc) {
      setErr("Please fill all the fields");
    } else {
  
      dispatch(updateNote({ index: index, temp: temp }))
    }
  };

  return (
    <div className="bigcard2">
      <input
        placeholder="Set New Title"
        value={newtitle}
        onChange={(e) => setNewtitle(e.target.value)}
      />

      <ReactQuill
        modules={modules}
        className="feild2"
        theme="snow"
        value={desc}
        placeholder="Write Something"
        onChange={(e) => setNewdes(e)}
      />
      <p>{err}</p>
      <button
        className="button"
        style={{ height: "50px", fontSize: "15px" }}
        onClick={(e) => {
          e.stopPropagation();
          setToggledit(false);
          handleSubmit();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Bigcard2;
