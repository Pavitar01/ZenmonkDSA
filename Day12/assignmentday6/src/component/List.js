import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bigcard from "./Bigcard";
import Bigcard2 from "./Bigcard2";
import { delnote } from "../Redux/slice";
const List = () => {
  const [arr, setArr] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  const [toggledit, setToggledit] = useState(false);
  const [bigcard, setBigcard] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.mynote;
  });

  
  useEffect(() => {
    if (data) {
      setArr(data);
    }
  }, [data]);

  const del = (val) => {
    dispatch(delnote(val));
  };

  const handleSearch = () => {
    const results = data.filter((obj) => obj.title.includes(searchQuery) || obj.des.includes(searchQuery));
    setArr(results);
  };
  return (
    <>
      <div className="search">
        <div className="div">
          <input
            placeholder="search"
            onChange={(e) => {
              e.stopPropagation();
              setsearchQuery(e.target.value);
            }}
          />
          <p onClick={handleSearch}>&#x1F50E;</p>
        </div>
      </div>
      <div className="list">
        {arr.map((i, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => (bigcard ? setBigcard(false) : setBigcard(true))}
            >
              {bigcard && <Bigcard title={i.title} des={i.des} />}
              <h1>{i?.title}</h1>
              <p className="p" dangerouslySetInnerHTML={{ __html: i.des }}></p>
              <div className="bottom">
                <p
                  style={{ float: "left" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggledit ? setToggledit(false) : setToggledit(true);
                  }}
                >
                 ✎
                </p>
                <p
                  style={{ float: "right" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    del(index);
                  }}
                >
                  &#128465;
                </p>
                {toggledit && (
                  <Bigcard2
                    title={i.title}
                    des={i.des}
                    arr={arr}
                    setArr={setArr}
                    setToggledit={setToggledit}
                    index={index}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
