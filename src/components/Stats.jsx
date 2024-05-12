import React, { useState } from "react";
import { Select, Table } from "antd";
import { ResponsiveLine } from "@nivo/line";

const { Option } = Select;

const Stats = () => {
  const [selectedCategory, setSelectedCategory] = useState("workforce");
  console.log(selectedCategory);
  // Data for the table
  const tableData1 = [
    { month: "SEP", budget: 374, actual: 302, percentage: 81 },
    { month: "OCT", budget: 418, actual: 321, percentage: 77 },
    { month: "NOV", budget: 444, actual: 339, percentage: 76 },
    { month: "DEC", budget: 0, actual: 0, percentage: 0 },
    { month: "JAN", budget: 180, actual: 181, percentage: 101 },
    { month: "FEB", budget: 216, actual: 159, percentage: 74 },
    { month: "MAR", budget: 290, actual: 161, percentage: 56 },
  ];

  const tableData2 = [
    { month: "SEP", budget: 303, actual: 149, percentage: 49 },
    { month: "OCT", budget: 232, actual: 130, percentage: 56 },
    { month: "NOV", budget: 400, actual: 253, percentage: 63 },
    // { month: "DEC", budget: 0, actual: 0, percentage: 0 },
    // { month: "JAN", budget: 0, actual: 0, percentage: 0 },
    // { month: "FEB", budget: 0, actual: 0, percentage: 0 },
    // { month: "MAR", budget: 0, actual: 0, percentage: 0 },
  ];

  const tableData3 = [
    { month: "SEP", budget: 0.67, actual: 0.5 },
    { month: "OCT", budget: 0.67, actual: 0.4 },
    { month: "NOV", budget: 0.67, actual: 0.7 },
    { month: "DEC", budget: 0, actual: 0 },
    { month: "JAN", budget: 0.68, actual: 0.24 },
    { month: "FEB", budget: 0.67, actual: 0.76 },
    { month: "MAR", budget: 0.66, actual: 0.6 },
  ];

  const tableData4 = [
    { month: "SEP", budget: 262400, actual: 223861 },
    { month: "OCT", budget: 285600, actual: 247363 },
    { month: "NOV", budget: 360000, actual: 336944 },
    { month: "DEC", budget: 0, actual: 0 },
    { month: "JAN", budget: 129056, actual: 39960 },
    { month: "FEB", budget: 237073, actual: 102993 },
    { month: "MAR", budget: 358254, actual: 141404 },
  ];

  const tableData5 = [
    //  { month: "SEP", budget: 0, actual: 0 },
    //  { month: "OCT", budget: 0, actual: 0 },
    //  { month: "NOV", budget: 0, actual: 0 },
    //  { month: "DEC", budget: 0, actual: 0 },
    { month: "JAN", budget: 969433, actual: 845802 },
    { month: "FEB", budget: 10552460, actual: 741399 },
    { month: "MAR", budget: 1302512, actual: 870087 },
  ];

  const tableData6 = [
    // { month: "SEP", budget: 0, actual: 0 },
    // { month: "OCT", budget: 0, actual: 0 },
    // { month: "NOV", budget: 0, actual: 0 },
    // { month: "DEC", budget: 0, actual: 0 },
    { month: "JAN", budget: 0.25, actual: 0.14 },
    { month: "FEB", budget: 0.34, actual: 0.32 },
    { month: "MAR", budget: 0.4, actual: 0.29 },
  ];

  const dataSource = [
    {
      month: "Sep",
      workforce: 14,
      dcrData: 32,
      dcrProductivity: 2,
      regularSignups: 1,
      productivity: 0.07,
      ontime: 4000,
    },
    {
      month: "Oct",
      workforce: 18,
      dcrData: 76,
      dcrProductivity: 4,
      regularSignups: 6,
      productivity: 0.34,
      ontime: 5400,
    },
    {
      month: "Nov",
      workforce: 15,
      dcrData: 51,
      dcrProductivity: 3.5,
      regularSignups: 6,
      productivity: 0.01,
      ontime: 2500,
    },
    {
      month: "Dec",
      workforce: 15,
      dcrData: 55,
      dcrProductivity: 3.8,
      regularSignups: 13,
      productivity: 0.9,
      ontime: 3400,
    },
    {
      month: "Jan",
      workforce: 12,
      dcrData: 46,
      dcrProductivity: 4,
      regularSignups: 13,
      productivity: 1.08,
      ontime: 1000,
    },
    {
      month: "Feb",
      workforce: 21,
      dcrData: 72,
      dcrProductivity: 3,
      regularSignups: 8,
      productivity: 0.38,
      ontime: 2000,
    },
    {
      month: "Mar",
      workforce: 11,
      dcrData: 33,
      dcrProductivity: 3,
      regularSignups: 3,
      productivity: null,
      ontime: null,
    },
  ];

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  // Columns configuration for Ant Design Table
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Actual",
      dataIndex: "actual",
      key: "actual",
    },
    {
      title: "Percentage",
      dataIndex: "percentage",
      key: "percentage",
      render: (percentage) => `${percentage}%`,
    },
  ];

  const columns1 = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Actual",
      dataIndex: "actual",
      key: "actual",
    },
  ];

  const Swathicolumns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Workforce",
      dataIndex: "workforce",
      key: "workforce",
    },
    {
      title: "DCR Data",
      dataIndex: "dcrData",
      key: "dcrData",
    },
    {
      title: "DCR Productivity",
      dataIndex: "dcrProductivity",
      key: "dcrProductivity",
    },
    {
      title: "Regular Signups",
      dataIndex: "regularSignups",
      key: "regularSignups",
    },
    {
      title: "Productivity",
      dataIndex: "productivity",
      key: "productivity",
    },
    {
      title: "Ontime",
      dataIndex: "ontime",
      key: "ontime",
    },
  ];

  // Data for the chart
  const chartData1 = [
    {
      id: "Actual",
      data: tableData1.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData1.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const chartData2 = [
    {
      id: "Actual",
      data: tableData2.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData2.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const chartData3 = [
    {
      id: "Actual",
      data: tableData3.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData3.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const chartData4 = [
    {
      id: "Actual",
      data: tableData4.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData4.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const chartData5 = [
    {
      id: "Actual",
      data: tableData5.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData5.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const chartData6 = [
    {
      id: "Actual",
      data: tableData6.map(({ month, actual }) => ({ x: month, y: actual })),
    },
    {
      id: "Budget",
      data: tableData6.map(({ month, budget }) => ({ x: month, y: budget })),
    },
  ];

  const SwathichartData = [
    {
      id: selectedCategory,
      data: dataSource.map((data) => ({
        x: data.month,
        y: data[selectedCategory],
      })),
    },
  ];

  console.log(SwathichartData);

  return (
    <>
      <h1
        style={{
          color: "var(--main-green)",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px",
          letterSpacing: "5px",
        }}
      >
        TOTAL WORK FORCE
      </h1>
      <div
        style={{
          display: "flex",
          //   flexDirection: "column",
          alignItems: "center",
          //   gap: "20px",
          //   marginTop: "10px",
        }}
      >
        <div
          style={{
            width: "150%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            Graph
          </h2>
          <div style={{ height: "400px" }}>
            <ResponsiveLine
              data={chartData1}
              margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "VALUE",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              colors={{ scheme: "category10" }}
              lineWidth={4}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableArea={true}
              enableSlices="x"
              useMesh={true}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            margin: "10px 15px",
          }}
        >
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            <strong>Table</strong>
          </h2>
          <Table
            className="ant-table-hovered"
            dataSource={tableData1}
            columns={columns}
          />
        </div>
      </div>
      <hr
        style={{
          borderBottom: "dotted black 6px",

          width: "10%",
          margin: "20px auto",
        }}
      />
      <h1
        style={{
          color: "var(--main-green)",
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px",
          letterSpacing: "5px",
        }}
      >
        TOTAL CLOSED SIGNUPS
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            {selectedCategory} Graph
          </h2>
          <div style={{ height: "400px" }}>
            <ResponsiveLine
              data={chartData2}
              margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "VALUE",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              colors={{ scheme: "category10" }}
              lineWidth={4}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableArea={true}
              enableSlices="x"
              useMesh={true}
            />
          </div>
        </div>
        <div style={{ width: "50%", margin: "10px 15px" }}>
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            <strong>Table</strong>
          </h2>
          <Table
            className="ant-table-hovered"
            dataSource={tableData2}
            columns={columns}
          />
        </div>
      </div>
      <hr
        style={{
          borderBottom: "dotted black 6px",

          width: "10%",
          margin: "20px auto",
        }}
      />
      <>
        <h1
          style={{
            color: "var(--main-green)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          TOTAL PRODUCTIVITY
        </h1>
        <h3
          style={{
            color: "var(--light-teal)",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          PRODUCTVITY=WORKFORCE+SIGNUPS
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Graph
            </h2>
            <div style={{ height: "400px" }}>
              <ResponsiveLine
                data={chartData3}
                margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Month",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Value",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "category10" }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                enableSlices="x"
                useMesh={true}
              />
            </div>
          </div>
          <div style={{ width: "50%", margin: "10px 15px" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <strong>Table</strong>
            </h2>
            <Table
              className="ant-table-hovered"
              dataSource={tableData3}
              columns={columns1}
            />
          </div>
        </div>
      </>
      <>
        <hr
          style={{
            borderBottom: "dotted black 6px",

            width: "10%",
            margin: "20px auto",
          }}
        />
        <h1
          style={{
            color: "var(--main-green)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          INCOME
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Graph
            </h2>
            <div style={{ height: "400px" }}>
              <ResponsiveLine
                data={chartData4}
                margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Month",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "VALUE",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "category10" }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                enableSlices="x"
                useMesh={true}
              />
            </div>
          </div>
          <div style={{ width: "50%", margin: "10px 15px" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <strong>Table</strong>
            </h2>
            <Table
              className="ant-table-hovered"
              dataSource={tableData4}
              columns={columns1}
            />
          </div>
        </div>
      </>
      <hr
        style={{
          borderBottom: "dotted black 6px",

          width: "10%",
          margin: "20px auto",
        }}
      />
      <>
        <h1
          style={{
            color: "var(--main-green)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          EXPENSES
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Graph
            </h2>
            <div style={{ height: "400px" }}>
              <ResponsiveLine
                data={chartData5}
                margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Month",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "VALUE",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "category10" }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                enableSlices="x"
                useMesh={true}
              />
            </div>
          </div>
          <div style={{ width: "50%", margin: "10px 15px" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              <strong>Table</strong>
            </h2>
            <Table
              className="ant-table-hovered"
              dataSource={tableData5}
              columns={columns1}
            />
          </div>
        </div>
      </>
      <hr
        style={{
          borderBottom: "dotted black 6px",

          width: "10%",
          margin: "20px auto",
        }}
      />
      <>
        <h1
          style={{
            color: "var(--main-green)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          EXPENSES ON INVESTMENT
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ width: "50%", textAlign: "center" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              Graph
            </h2>
            <div style={{ height: "400px" }}>
              <ResponsiveLine
                data={chartData6}
                margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
                xScale={{ type: "point" }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Month",
                  legendOffset: 36,
                  legendPosition: "middle",
                }}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "VALUE",
                  legendOffset: -40,
                  legendPosition: "middle",
                }}
                colors={{ scheme: "category10" }}
                lineWidth={4}
                pointSize={10}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                enableSlices="x"
                useMesh={true}
              />
            </div>
          </div>
          <div style={{ width: "50%", margin: "10px 15px" }}>
            <h2
              style={{
                color: "var(--light-teal)",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "10px",
                letterSpacing: "10px",
                textTransform: "uppercase",
              }}
            >
              <strong>Table</strong>
            </h2>
            <Table
              className="ant-table-hovered"
              dataSource={tableData6}
              columns={columns1}
            />
          </div>
        </div>
      </>
      <hr
        style={{
          borderBottom: "dotted black 6px",

          width: "10%",
          margin: "20px auto",
        }}
      />
      <>
        <h1
          style={{
            color: "var(--main-green)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
            letterSpacing: "5px",
          }}
        >
          MY Performance KPI
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <label htmlFor="category">Select Category: </label>
          <Select
            id="category"
            value={selectedCategory}
            onChange={handleChangeCategory}
            style={{ width: 200 }}
          >
            {Swathicolumns.slice(1).map((column) => (
              <Option key={column.key} value={column.dataIndex}>
                {column.title}
              </Option>
            ))}
          </Select>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            {selectedCategory} - Graph
          </h2>
          <div style={{ height: "400px" }}>
            <ResponsiveLine
              data={SwathichartData}
              margin={{ top: 10, right: 50, bottom: 50, left: 60 }}
              xScale={{ type: "point" }}
              yFormat=" >-.2f"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Month",
                legendOffset: 36,
                legendPosition: "middle",
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "VALUE",
                legendOffset: -40,
                legendPosition: "middle",
              }}
              colors={{ scheme: "set1" }}
              lineWidth={4}
              pointSize={10}
              pointColor={{ from: "color", modifiers: [] }}
              pointBorderWidth={2}
              pointBorderColor={{ theme: "background" }}
              pointLabel="y"
              pointLabelYOffset={-12}
              enableArea={true}
              enableSlices="x"
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              color: "var(--light-teal)",
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "10px",
              letterSpacing: "10px",
              textTransform: "uppercase",
            }}
          >
            Table
          </h2>
          <Table
            dataSource={dataSource}
            columns={Swathicolumns}
            bordered
            pagination={false}
            style={{ margin: "20px auto", maxWidth: "90%" }}
          />
        </div>
      </>
    </>
  );
};

export default Stats;
