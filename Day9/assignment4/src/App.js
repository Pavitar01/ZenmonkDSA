import React from "react";
import Auth from "./Auth";
import "./css/all.css";
import Disc from "./component/Disc";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import Cards from "./component/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchnews } from "./service/news.service";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const App = () => {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [data, setdata] = useState([]);
  const [newdata, setnews] = useState([]);

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    const newsapi = async (query) => {
      const news = await fetchnews(query);
      setnews(news.data.articles);
      // console.log(newdata);
    };
    let query = "delhi";

    newsapi(data.name);
  }, [data]);

  return (
    <div className="parent">
      <Layout className="layout">
        <Header
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
          className="header"
        >
          <Search
            placeholder="input search text"
            onSearch={(value) => getWetherDetails(value)}
            style={{ width: 200 }}
            className="search"
          />
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
          className="content"
        >
          <Cards data={data} newsdata={newdata} />
          <Disc />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
