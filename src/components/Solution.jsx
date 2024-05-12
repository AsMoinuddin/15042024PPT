import React, { useState } from "react";
import { Card, Typography } from "antd";
import kediaVillageImg from "../assets/kediaVillage.jpg";
import banTheBulbImg from "../assets/bandTheBulb.jpeg";

const { Title, Paragraph } = Typography;

const Solution = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cardWidth = hoveredCard !== null ? "60vw" : "45vw";
  const otherCardWidth = hoveredCard !== null ? "30vw" : "45vw";

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <Card
          hoverable
          style={{
            width: hoveredCard === 0 ? cardWidth : otherCardWidth,

            transition: "width 0.5s ease-in-out",
          }}
          cover={
            <img
              alt="Kedia Village"
              src={kediaVillageImg}
              style={{
                height: "75vh",
                objectFit: "cover",
              }}
            />
          }
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <Title
            level={4}
            style={{
              fontSize: "2rem",
              color: "var(--main-green)",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            Kedia Village
          </Title>
          <Paragraph style={{ fontSize: "1.2rem" }}>
            The fields lacked the green that my eyes longed for, and they were
            dying from the addition of chemical pesticides and fertilisers. The
            yield was not of good quality and the income generated was low. At a
            time when the villagers lost all hope and often participated in
            conflicts, the ecological revolution was introduced.
          </Paragraph>
          <Paragraph style={{ fontSize: "1.2rem" }}>
            <strong
              style={{
                color: "var(--main-green)",
                fontWeight: "bold",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Campaign:
            </strong>{" "}
            The “Bihar Living Soils” campaign was an attempt to reduce
            dependence on agrochemicals such as chemical fertilisers and
            pesticides, and bring the soil back to life by rejuvenating soil
            health and biodiversity, using biomass-based organic supplements.
            The period of the shift from chemical-laden farming to ecological
            agriculture was not easy, but Kedia’s farmers persevered.
          </Paragraph>
          <Paragraph style={{ fontSize: "1.2rem" }}>
            <strong
              style={{
                color: "var(--main-green)",
                fontWeight: "bold",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Result:
            </strong>{" "}
            The District Magistrate of Jamui District has recently announced
            that the Jamui administration is going to implement the Kedia model
            in one village in each of the ten blocks of the district...
          </Paragraph>
        </Card>
        <Card
          hoverable
          style={{
            width: hoveredCard === 1 ? cardWidth : otherCardWidth,

            transition: "width 0.5s ease-in-out",
          }}
          cover={
            <img
              alt="Ban The Bulb"
              src={banTheBulbImg}
              style={{
                height: "75vh",
                objectFit: "cover",
              }}
            />
          }
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <Title
            level={4}
            style={{
              fontSize: "2rem",
              color: "var(--main-green)",
              fontWeight: "bold",
              textAlign: "center",
              letterSpacing: "5px",
            }}
          >
            Ban The Bulb
          </Title>
          <Paragraph
            style={{
              fontSize: "1.2rem",
            }}
          >
            Incandescent bulbs are highly inefficient in converting electricity
            into light. The majority of the energy they consume is converted
            into heat rather than visible light, making them less
            energy-efficient compared to alternatives like CFLs or LEDs.
          </Paragraph>
          <Paragraph style={{ fontSize: "1.2rem" }}>
            <strong
              style={{
                color: "var(--main-green)",
                fontWeight: "bold",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Campaign:
            </strong>{" "}
            Ban The Bulb (BTB) campaign is to discourage the use of traditional
            incandescent bulbs and replacing them with energy-efficient
            lighting. There is a considerable scope of reducing energy
            consumption through energy-efficient lighting schemes...
          </Paragraph>
          <Paragraph style={{ fontSize: "1.2rem" }}>
            <strong
              style={{
                color: "var(--main-green)",
                fontWeight: "bold",
                letterSpacing: "5px",
                textTransform: "uppercase",
              }}
            >
              Result:
            </strong>{" "}
            Greenpeace India launched the Ban the Bulb campaign in 2006, calling
            for a phase out of inefficient light bulbs by 2012...
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Solution;
