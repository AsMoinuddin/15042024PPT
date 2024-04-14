import React from "react";
import { Typography, Divider } from "antd";
import Carousel from "react-material-ui-carousel";
import intro from "../assets/ppt intro.jpg";
import problem1 from "../assets/problem1.jpg";
import problem6 from "../assets/problem6.jpg";

const { Title, Text } = Typography;

const Ppt = () => {
  // Define an array of problems
  const problems = [
    {
      title: "Health Risks",
      description:
        "Heatwaves can lead to heat-related illnesses such as heatstroke, dehydration, and heat exhaustion. Vulnerable populations, including the elderly, children, and those with pre-existing health conditions, are particularly at risk.",
      image: problem1,
    },
    {
      title: "Increased Mortality",
      description:
        "Heatwaves are associated with an increase in mortality rates, especially among the elderly and those with chronic health conditions. The extreme heat can exacerbate underlying health issues and lead to fatalities.",
    },
    {
      title: "Strain on Healthcare Systems",
      description:
        "Hospitals and emergency services may be overwhelmed with an influx of heat-related illnesses, putting strain on healthcare resources and personnel.",
    },
    {
      title: "Social Inequality",
      description:
        "Those without access to air conditioning or adequate shelter may suffer disproportionately during heatwaves, highlighting social inequalities. The lack of cooling infrastructure can exacerbate disparities in socioeconomic status.",
    },
    {
      title: "Energy Demand and Power Outages",
      description:
        "Increased demand for cooling systems during heatwaves can strain energy grids, leading to power outages and further exacerbating the heat-related problems faced by society.",
    },
    {
      title: "Impact on Agriculture and Food Supply",
      description:
        "Crops may fail or produce lower yields due to extreme heat and drought conditions, leading to food shortages and price spikes. This can contribute to food insecurity, particularly in vulnerable communities.",
      image: problem6,
    },
    {
      title: "Economic Disruption",
      description:
        "Heatwaves can disrupt economic activity, leading to decreased productivity and financial losses for businesses. Outdoor workers may be unable to work, leading to lost wages and decreased output.",
    },
    {
      title: "Social Cohesion Strain",
      description:
        "Heightened temperatures can lead to increased tensions and conflicts within communities, especially in densely populated urban areas where resources are limited.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
      }}
    >
      {/* Into section */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
          fontSize: "1.2rem",
        }}
      >
        <div>
          <Title
            level={1}
            style={{
              color: "var(--main-green)",
              fontWeight: "bolder",
              fontSize: "3rem",
              letterSpacing: "8px",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Heatwave Action Plan
          </Title>
          <Title
            level={3}
            style={{
              fontSize: "1.4rem",
              letterSpacing: "6px",
              color: "var(--dark-green)",
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            Safeguarding Delhi's Future Against Rising Temperatures
          </Title>
          <br />
          <Text strong style={{ fontSize: "1.3rem" }}>
            Introduction about Heatwave:
          </Text>
          <br />
          <p style={{ fontSize: "1.2rem", textAlign: "justify" }}>
            A heatwave is a prolonged period of unusually hot weather, typically
            with temperatures significantly above average for a particular
            region. These extreme heat events can last for days or even weeks,
            posing significant health risks and straining infrastructure such as
            power grids and water supplies. Vulnerable populations, including
            the elderly, children, and those with pre-existing health
            conditions, are particularly at risk during heatwaves. Climate
            change is contributing to an increase in the frequency, duration,
            and intensity of heatwaves, highlighting the importance of proactive
            measures to mitigate their impacts.
          </p>
        </div>
        <div style={{ marginRight: "24px" }}>
          <img
            src={intro}
            alt="Heatwave"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Divider
          style={{
            height: "4px",
            background: "var(--dark-green)",
            opacity: "0.5",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Problems section */}
      <div style={{ margin: "32px auto", maxWidth: "95%", height: "550px" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontWeight: "bolder",
            color: "var(--dark-green)",
            fontSize: "2.5rem",
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}
        >
          Problems
        </Title>
        <Carousel autoPlay={true} animation="slide" height="450px">
          {/* Map through the problems array and render each problem with an image */}
          {problems.map((problem, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "450px",
                margin: "20px",
                fontSize: "1.5rem",
              }}
            >
              <div style={{ flex: 1, paddingRight: "20px" }}>
                <div>
                  <Title
                    level={3}
                    style={{
                      textAlign: "center",
                      marginBottom: "16px",
                      fontSize: "2rem",
                      color: "var(--main-green)",
                    }}
                  >
                    {problem.title}
                  </Title>
                  <Text
                    style={{
                      fontSize: "1.2rem",
                    }}
                  >
                    {problem.description}
                  </Text>
                </div>
              </div>
              <div style={{ flex: 1, justifyContent: "center" }}>
                <img
                  src={problem.image}
                  alt={problem.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <Divider
          style={{
            height: "4px",
            background: "var(--dark-green)",
            opacity: "0.5",
            borderRadius: "4px",
          }}
        />
      </div>
      {/*Solution section */}
      <div style={{ maxWidth: "95%", margin: "32px auto" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "24px",
            fontWeight: "bolder",
            color: "var(--dark-green)",
            fontSize: "2.5rem",
            letterSpacing: "8px",
            textTransform: "uppercase",
          }}
        >
          Solution by Greenpeace
        </Title>
        <Title
          level={3}
          style={{
            fontSize: "1.4rem",
            letterSpacing: "6px",
            color: "var(--light-teal)",
            textAlign: "justify",
            marginBottom: "0",
          }}
        >
          Greenpeace activists have been advocating for the implementation of
          the Heatwave Action Plan in Delhi to safeguard the city's future
          against rising temperatures. Here's how they are addressing the issue:
        </Title>
        <ul style={{ fontSize: "1.3rem", padding: "10px" }}>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "var(--main-green)",
                  marginBottom: "0",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Advocacy efforts:
              </p>
              Greenpeace activists unfurled a banner and held a demonstration
              outside the State Secretariat, questioning the delay in
              implementing the Heatwave Action Plan.
            </div>
            {/* <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="Advocacy Efforts"
              style={{ width: "150px", height: "auto", marginLeft: "20px" }}
            /> */}
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              textAlign: "justify",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "var(--main-green)",
                  marginBottom: "0",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Follow-up actions:
              </p>{" "}
              Following the demonstration, Greenpeace India released a follow-up
              letter addressed to the Chief Minister of Delhi, demanding the
              Heatwave Action Plan draft be made available for public
              consultation before the end of June 2023.
            </div>
            {/* <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="Follow-up Actions"
              style={{ width: "150px", height: "auto", marginLeft: "20px" }}
            /> */}
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "var(--main-green)",
                  marginBottom: "0",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Collaborative efforts:
              </p>{" "}
              Greenpeace India collaborated with the Heatwave Action Coalition
              to write to Chief Minister Arvind Kejriwal, requesting the release
              of the Delhi Heat Action Plan to combat the impacts of heatwaves
              in the city.
            </div>
            {/* <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="Collaborative Efforts"
              style={{ width: "150px", height: "auto", marginLeft: "20px" }}
            /> */}
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "justify",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                style={{
                  color: "var(--main-green)",
                  marginBottom: "0",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Proposed solutions:
              </p>{" "}
              Greenpeace India proposed a comprehensive set of ten actionable
              demands to be included in the Delhi Heatwave Action Plan,
              addressing issues such as early warning systems, support for
              at-risk populations, policy integration, and provision of urgent
              healthcare for heatstroke victims.
            </div>
            {/* <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="Proposed Solutions"
              style={{ width: "150px", height: "auto", marginLeft: "20px" }}
            /> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ppt;
