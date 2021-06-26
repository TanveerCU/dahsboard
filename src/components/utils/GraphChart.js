
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const data = [
  {
    name: "jan",
    sell: 4000,
    profit: 2400,
  },
  {
    name: "feb",
    sell: 3000,
    profit: 1398,

  },
  {
    name: "march",
    profit: 2000,
    sell: 9800,

  },
  {
    name: "april",
    profit: 2780,
    sell: 3908,

  },
  {
    name: "may",
    profit: 1890,
    sell: 4800,

  },
  {
    name: "june",
    profit: 2390,
    sell: 3800,

  },
  {
    name: "july",
    profit: 3490,
    sell: 4300,

  },
  {
    name: "aug",
    profit: 3490,
    sell: 4300,
 
  },
  {
    name: "sep",
    profit: 1000,
    sell: 4300,

  },
  {
    name: "oct",
    profit: 1500,
    sell: 12000,

  },
  {
    name: "nov",
    profit: 3100,
    sell: 15000,

  },
  {
    name: "dec",
    profit: 2500,
    sell: 10000,

  }
];

export default function GraphChart() {
    const [width, setWidth] = React.useState(window.innerWidth);
    console.log(width);
    const breakpoint = 641;


    const handleWindowResize = () =>{
        if(window.innerWidth <= breakpoint){
        setWidth(window.innerWidth-60);
    }else{
        setWidth(window.innerWidth-220);
    }
    
        console.log(window.innerWidth);
    }
  
    React.useEffect(() => {
 
      window.addEventListener("resize", handleWindowResize);
      if(window.innerWidth <= breakpoint){
        setWidth(window.innerWidth-60);
    }else{
        setWidth(window.innerWidth-220);
    }
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  return (
      <>
      
    <LineChart
      width={width}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="sell"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
    </LineChart>
    </>
  );
}