import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { Box } from "@mui/material";

export default function BestSelledProductChartBar() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    setChannelData([
      {
        data: [3400, 3500, 3000, 4000, 4699],
      },
    ]);

    return () => {
      setChannelData([]);
    };
  }, []);

  const options3 = {
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
    chart: {
      id: "basic-bar",
      type: "bar",
      stacked: true, //one on top of another
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      offsetY: 0,
    },
    title: {
      text: "Top 5 Selled Product Over Year's",
    },
    plotOptions: {
      bar: {
        distributed: true,
        barHeight: "40%",
        horizontal: true,
      },
    },

    xaxis: {
      categories: [
        "Penicillin",
        "Metformin",
        "Amoxicillin",
        "Omeprazole",
        "Ciprofloxacin",
      ],
    },
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
  };
  return (
    <Box
      sx={{
        marginX: 4,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <ApexCharts
        options={options3}
        series={channelData}
        type="bar"
        width="100%"
        height="320"
      />
    </Box>
  );
}
