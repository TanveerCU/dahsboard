
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "2015",
    sales: 2400
  },
  {
    name: "2016",
    sales: 1398
  },
  {
    name: "2017",
    sales: 9800
  },
  {
    name: "2018",
    sales: 3908
  },
  {
    name: "2019",
    sales: 4800
  },
  {
    name: "2020",
    sales: 3800
  },
  {
    name: "2021",
    sales: 4300
  }
];

export default function BarStat() {
    const [width, setWidth] = React.useState(window.innerWidth);
    console.log(width);
    const breakpoint = 641;


    const handleWindowResize = () =>{
        if(window.innerWidth <= breakpoint){
        setWidth(window.innerWidth-60);
    }else{
        setWidth((window.innerWidth-220)/2);
    }
    
        console.log(window.innerWidth);
    }
  
    React.useEffect(() => {
 
      window.addEventListener("resize", handleWindowResize);
      if(window.innerWidth <= breakpoint){
        setWidth(window.innerWidth-60);
    }else{
      setWidth((window.innerWidth-220)/2);
    }
  
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  return (
    <>
    
    <BarChart
      width={width}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="sales" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </>
  );
}
