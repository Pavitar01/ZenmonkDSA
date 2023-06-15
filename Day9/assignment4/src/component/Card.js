import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import evening from "../assets/flat2.jpg";
import day from "../assets/flat.jpg";
import night from "../assets/night.jpg";
import { fetchnews } from "../service/news.service";
import { fetchdays } from "../service/weather.service";
const Cards = ({ data, newsdata }) => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [alldays,setdays]=useState([])

  useEffect(() => {
    const updateTimeOfDay = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 9 && currentTime < 17) {
        setTimeOfDay(`${day}`);
      } else if (currentTime >= 17 && currentTime < 19) {
        setTimeOfDay(`${evening}`);
      } else {
        setTimeOfDay(`${night}`);
      }
    };

    updateTimeOfDay();

    const days = async (long, lat) => {
      let response = await fetchdays(long, lat);
      setdays(response.data.data.timelines[0].intervals)
    };
    console.log(alldays);

    days(10, 10);

    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);

  // console.log(data);
  // useEffect(() => {
  //   const days = (long, lat) => {
  //     let response = fetchdays(long, lat);
  //     console.log(response.data.data.timelines.intervals);
  //   };
  //   days(data.coord.lon, data.coord.lat);
  // }, []);

  return (
    <Card className="card">
      <Card
        className="tempcard"
        style={{
          backgroundImage: `url(${timeOfDay})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,1)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Row gutter={16}>
          <Col span={15}>
            <Card bordered={false} className="degreecard">
              <div className="temperature">
                {/* <h1 className="h1">{(data.main.temp - 273.15).toFixed(2)} °C</h1> */}
                {/* <h1 className="h2">{data.weather[0].main}</h1> */}
              </div>
              <div className="humidity">
                <div>
                  <h3 className="h3">
                    Humidity
                    {/* <span> {data.main.humidity}%</span> */}
                  </h3>
                </div>
                <div>
                  <h3 className="h4">
                    Wind
                    {/* <span>{data.wind.speed}kmph</span> */}
                  </h3>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} className="citycard">
              {/* <h1 className="locname">{data.name}</h1> */}
            </Card>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col span={9}>
          <Card title="News">
            {newsdata.map((item) => {
              return (
                <>
                  <li>{/* {item.title} */}</li>
                </>
              );
            })}
          </Card>
        </Col>
        <Col span={11}>
          <Card title="Next Days">
            <div>
            {
              alldays.map((i)=>{
                return(<li>{i.values.temperature}</li>)
              })
              
            }
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Cards;
