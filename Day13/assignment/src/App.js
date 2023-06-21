import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./redux/Slice/ProductSlice";
import { UpdateNews } from "./redux/Slice/Action";

import "./css/all.css";
import { NewProducts } from "./redux/Slice/NewProduct";

const App = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });

  const news = useSelector((state) => {
    return state.News[0];
  });
  const newProd = ((state) => {
    return state;
  });

  const getProduct = () => {
    dispatch(fetchProduct());
  };

  const getNews = () => {
    dispatch(UpdateNews(text));
  };

  const getNewProd = () => {
    dispatch(NewProducts());
  };


  if(state.Product.isloading)
  {
    return <li>Loading...</li>
  }
  return (
    <div>
      <button onClick={getProduct}>Click</button>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={getNews}>Get News</button>
      <button onClick={getNewProd}>Get News</button>
      <div className="list">
        {state.Product.data &&
          state.Product.data.map((i, index) => {
            return (
              <div className="card" key={index}>
              <img src={i?.image} width={100} height={100} alt={"images"}
              />
               <h1 style={{fontSize:"15px",wordBreak:"break-word"}}> {i?.title}</h1>

                <p>Price:{i?.price}</p>
              </div>
            );
          })}
        {news &&
          news.map((i, index) => {
            return (
              <div className="card" key={index}>
                {i?.title}
              </div>
            );
          })}
        {/* {state.NewProd.data &&
          newProd.map((i, index) => {
            return (
              <div className="card" key={index}>
                {i?.title}
              </div>
            );
          })} */}
      </div>
    </div>
  );
};

export default App;
