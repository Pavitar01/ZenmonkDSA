import React, { useEffect, useState } from "react";

const About = () => {
  const [fname, setfname] = useState("");
  const [logo, setlogo] = useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    var allcookies = localStorage.getItem("User");
    const values = JSON.parse(allcookies);
    setfname(values[0].name);
    setlogo(values[0].profile);
    setrole(values[0].role);
    setemail(values[0].email);
  });
  return (
    <div className="about">
      <div className="aboutlogo">
        <img src={logo} />
      </div>
      <h1> {fname}</h1>
      <p>Role: &nbsp;{role}</p>
      <p>{email}</p>
    </div>
  );
};

export default About;
