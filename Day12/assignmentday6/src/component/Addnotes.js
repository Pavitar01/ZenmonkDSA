import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addnote } from "../Redux/slice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Addnotes = () => {
  const [inp, setInp] = useState("");
  const [text, setText] = useState("");
  const [err, setErr] = useState("");
  const [display, setDisplay] = useState("block");

  const dispatch = useDispatch();
  const done = () => {
    const data = {
      title: inp,
      des: text,
    };
    if (!text || !inp) {
      setErr("Please fill all the fields");
    } else {
      dispatch(addnote(data));
      setDisplay("none");
    }
  };
  //   tools]
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
  return (
    <>
      <div className="add" style={{ display: `${display}` }}>
        <input
          type="text"
          placeholder="Title.."
          onChange={(e) => setInp(e.target.value)}
        />
        <ReactQuill
          modules={modules}
          theme="snow"
          placeholder="Description.."
          className="feild"
          onChange={(e) => setText(e)}
        />
        <button
          className="button"
          onClick={done}
          style={{
            color: "green",
            position: "absolute",
            right: "5px",
            bottom: "10px",
          }}
        >
          &#x2713;
        </button>
        <p
          style={{
            color: "red",
            position: "absolute",
            bottom: "10px",
            marginLeft: "70px",
          }}
        >
          {err}{" "}
        </p>
      </div>
    </>
  );
};

export default Addnotes;
