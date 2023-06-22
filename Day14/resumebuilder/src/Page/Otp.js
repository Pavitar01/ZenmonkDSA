import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { NoOtp, addUser, userOtp } from "../Redux/Store/Slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const env = process.env.REACT_APP_OTP;
  const checkOtp = () => {
    if (otp === "") {
      setErr("Please Fill This Feild");
    } else if (env === otp) {
      setVal("/Add");
      dispatch(userOtp());
    } else {
      setErr("Invalid OTP");
    }
  };
  return (
    <div className="otp">
      <div className="window">
        <h1>Confirm OTP</h1>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          className="otpwindow"
        />
        <button className="otpbtn" onClick={checkOtp}>
          <Link to={val} style={{textDecoration:"none"}}>Confirm</Link>
        </button>
        <p>{err}</p>
      </div>
    </div>
  );
};

export default Otp;
