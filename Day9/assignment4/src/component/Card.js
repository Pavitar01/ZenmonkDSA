import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import evening from "../assets/flat2.jpg";
import day from "../assets/flat.jpg";
import night from "../assets/night.jpg";
import { fetchdays } from "../service/weather.service";

const Cards = ({ data, newsdata }) => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [alldays, setDays] = useState([]);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const currentTime = new Date().getHours();
      if (currentTime >= 9 && currentTime < 17) {
        setTimeOfDay(day);
      } else if (currentTime >= 17 && currentTime < 19) {
        setTimeOfDay(evening);
      } else {
        setTimeOfDay(night);
      }
    };

    updateTimeOfDay();

    if (data && data.coord && data.coord.lon && data.coord.lat) {
      const fetchWeatherData = async () => {
        try {
          const response = await fetchdays(data.coord.lon, data.coord.lat);
          setDays(response.data.data.timelines[0].intervals);
        } catch (error) {
          console.log("Error fetching weather data:", error);
        }
      };

      fetchWeatherData();
    }

    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, [data]);

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
                {data && data.main && (
                  <>
                    <h1 className="h1">
                      {(data.main.temp - 273.15).toFixed(2)} °C
                    </h1>
                    <h1 className="h2">{data.weather[0].main}</h1>
                  </>
                )}
              </div>
              <div className="humidity">
                <div>
                  <h3 className="h3">
                    Humidity
                    <span> {data?.main?.humidity}%</span>
                  </h3>
                </div>
                <div>
                  <h3 className="h4">
                    Wind
                    <span>{data?.wind?.speed}kmph</span>
                  </h3>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false} className="citycard">
              <h1 className="locname">{data?.name}</h1>
            </Card>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col span={9}>
          <Card title="News" className="newscard">
            {newsdata.map((item, index) => (
              <div key={index} className="news">
                <a href={item.source.url}>
                  <img src={item.image} alt="News" />
                </a>
                <p>{item.title}</p>
              </div>
            ))}
          </Card>
        </Col>
        <Col span={11}>
          <Card title="Next Hour" className="nextdays">
            <div className="hr">
              {alldays.slice(0, 200).map((item, index) => (
                <div key={index} className="days">
                  <h5>{item.values.temperature}°C</h5>
                  <p>{item.startTime.slice(11, 16)}</p>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Cards;
