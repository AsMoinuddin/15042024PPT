import React from "react";
import { Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "antd/dist/reset.css";
import green1 from "../assets/logo.svg";
import green2 from "../assets/green2.jpg";
import green3 from "../assets/green3.jpg";
import green4 from "../assets/green4.jpg";
import green5 from "../assets/green5.jpg";
import core1 from "../assets/core1.jpg";
import core2 from "../assets/core2.jpg";
import core3 from "../assets/core3.jpg";
import core4 from "../assets/core4.jpg";
import core5 from "../assets/core5.jpg";
import mission1 from "../assets/mission1.jpg";
import mission2 from "../assets/mission2.jpg";
import mission3 from "../assets/mission3.jpg";
import mission4 from "../assets/mission4.jpg";
import mission5 from "../assets/mission5.jpg";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        marginTop: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "80vw",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "1", textAlign: "left" }}>
          <h2 style={{ color: "var(--main-green)" }}>Welcome to Greenpeace</h2>
          <p>
            Greenpeace is more than just an environmental organization; we're a
            global movement of individuals dedicated to safeguarding the planet
            and its inhabitants. Since our inception, we've championed
            non-violent activism and creative solutions to tackle the most
            pressing environmental issues of our time.
          </p>
          <p>
            From confronting climate change and protecting endangered species to
            advocating for clean energy and preserving our oceans, our work is
            driven by a shared vision of a sustainable and equitable future for
            all.
          </p>
        </div>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <Carousel
            autoPlay={true}
            animation="slide"
            timeout={500}
            style={{ marginTop: "20px", width: "100%" }}
          >
            <img
              src={green1}
              alt="Image 1"
              style={{ width: "100%", maxHeight: "250px" }}
            />
            <img
              src={green2}
              alt="Image 2"
              style={{ width: "100%", maxHeight: "250px" }}
            />
            <img
              src={green3}
              alt="Image 3"
              style={{ width: "100%", maxHeight: "250px" }}
            />
            <img
              src={green4}
              alt="Image 4"
              style={{ width: "100%", maxHeight: "250px" }}
            />
            <img
              src={green5}
              alt="Image 5"
              style={{ width: "100%", maxHeight: "250px" }}
            />
          </Carousel>
        </div>
      </div>

      <div>
        <div
          style={{
            minWidth: "80vw",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1", minWidth: "400px" }}>
            <Carousel
              autoPlay={true}
              animation="slide"
              timeout={500}
              style={{ marginTop: "20px", width: "100%", height: "100%" }}
            >
              <img
                src={core1}
                alt="Image 1"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={core2}
                alt="Image 2"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={core3}
                alt="Image 3"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={core4}
                alt="Image 4"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={core5}
                alt="Image 5"
                style={{ width: "100%", maxHeight: "250px" }}
              />
            </Carousel>
          </div>
          <div style={{ flex: "1", textAlign: "left" }}>
            <h3 style={{ color: "var(--main-green)" }}>Our Mission</h3>
            <ul>
              <li>
                <strong>Protecting Biodiversity:</strong> Safeguarding all forms
                of life on Earth.
              </li>
              <li>
                <strong>Preventing Pollution:</strong> Ending the abuse of our
                oceans, land, air, and fresh water.
              </li>
              <li>
                <strong>Eliminating Nuclear Threats:</strong> Working towards a
                world free from nuclear weapons.
              </li>
              <li>
                <strong>Promoting Peace:</strong> Advocating for global
                disarmament and non-violence.
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            minWidth: "80vw",
            padding: "20px",
            margin: "10px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1", textAlign: "left" }}>
            <h3 style={{ color: "var(--main-green)" }}>Our Core Values</h3>
            <ul>
              <li>
                <strong>Bearing Witness:</strong> Peacefully witnessing
                environmental destruction.
              </li>
              <li>
                <strong>Non-Violent Confrontation:</strong> Using peaceful
                methods to spark public debate and change.
              </li>
              <li>
                <strong>Independence:</strong> Remaining free from political or
                commercial influence.
              </li>
              <li>
                <strong>Solutions-Oriented:</strong> Seeking solutions and
                fostering informed debate.
              </li>
              <li>
                <strong>Respect for Democracy:</strong> Upholding democratic
                principles and striving for global social equity.
              </li>
            </ul>
          </div>
          <div style={{ flex: "1", minWidth: "300px" }}>
            <Carousel
              autoPlay={true}
              animation="slide"
              timeout={500}
              indicators={true}
              style={{ marginTop: "20px", width: "auto" }}
            >
              <img
                src={mission1}
                alt="Image 1"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={mission2}
                alt="Image 2"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={mission3}
                alt="Image 3"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={mission4}
                alt="Image 4"
                style={{ width: "100%", maxHeight: "250px" }}
              />
              <img
                src={mission5}
                alt="Image 5"
                style={{ width: "100%", maxHeight: "250px" }}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
