import Header from "./components/Header";
import TimeSeries from "./components/TimeSeries";
import {useState} from 'react';
import ColumnChart from "./components/ColumnChart";
import Sparkline1 from "./components/Sparkline1"
import Sparkline2 from "./components/Sparkline2"
import DateSelection from "./components/DateSelection";



function App() {

  const API_BASE = "http://localhost:3001"

  var startDay = 1, startMonth="July", endDay = 31, endMonth = "July";

  // const [startDay, setStartDay] = useState(1);

  // initial values added as per data startDay = 1, startMonth="July", endDay = 31, endMonth = "July"

  var xAxis1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  var yAxis1 = [63, 72, 77, 72, 63, 73, 38, 42, 45, 75, 58, 102, 83, 45, 55, 54, 106, 71, 63, 78, 29, 17, 34, 70, 91, 35, 82, 32, 43, 43, 58];
  var xAxis2 = ['PRT', 'GBR', 'USA', 'ESP', 'IRL', 'FRA', 'NULL', 'ROU', 'NOR', 'OMN', 'ARG', 'POL', 'DEU', 'BEL', 'CHE', 'CN', 'GRC', 'ITA', 'NLD', 'DNK', 'RUS', 'SWE', 'AUS', 'EST', 'CZE', 'BRA', 'FIN', 'MOZ', 'BWA', 'LUX', 'SVN', 'ALB'];
  var yAxis2 = [1181, 160, 33, 222, 62, 34, 1, 11, 8, 2, 5, 12, 10, 10, 19, 19, 2, 4, 5, 11, 11, 6, 4, 4, 2, 9, 7, 5, 3, 3, 2, 2];
  var yAxis4 = [121, 9, 5, 15, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 4, 5, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 1, 0, 0]
  var totalAdults = 1869;
  var totalChildren = 173;


  const getBooking = async () => {

      // const res = await fetch(API_BASE + "/bookings");
      // const data = await res.json();

      const res = await fetch(API_BASE + "/bookings/"+startDay+"/"+startMonth+"/"+endDay+"/"+endMonth);
      const data = await res.json();

      const mp1 = new Map();
      const mp2 = new Map();
      const mp4 = new Map();
      
      totalAdults = 0;
      totalChildren = 0;
      // creating map by iterating through obtained values

      for(var i = 0; i<data.length; i++){

          // graph 1

          var key = data[i].arrival_date_day_of_month;
          var value = data[i].adults + data[i].children + data[i].babies;
          
          totalAdults += value;
          totalChildren += data[i].children;

          // console.log(totalAdults)
          if (!mp1.has(key))
            mp1.set(key, value);
          else {
            var t = mp1.get(key);
            t += value;
            mp1.set(key, t);
          }

          // graph 2

          var country = data[i].country;
          key = country;
          if (!mp2.has(key))
            mp2.set(key, value);
          else {
            var t = mp2.get(key);
            t += value;
            mp2.set(key, t);
          }

          // graph 3 - new axes not required

          // graph 4

          value = data[i].children;
          if (!mp4.has(key))
            mp4.set(key, value);
          else {
            var t = mp4.get(key);
            t += value;
            mp4.set(key, t);
          }

      }
      console.log(totalChildren);
      // creating xaxis and yaxis vector

      xAxis1 = []; yAxis1 = [];
      xAxis2 = []; yAxis2 = [];
      yAxis4 = [];
      for(let [k, v] of mp1){
          xAxis1.push(k);
          yAxis1.push(v);
      }
      for(let [k, v] of mp2){
        xAxis2.push(k);
        yAxis2.push(v);
      }
      for(let [k, v] of mp4){
        yAxis4.push(v);
      }
      // console.log(xAxis2);
      // console.log(yAxis4);

      // printGraph(xAxis, yAxis);
  }

  // const [start, setStart] = useState(2);
  
  const [mounted, setMounted] = useState(false);

  return (
    <div className="App">
        <div>
            <div>
                <Header/>
                {/* <button onClick={getBooking}>CLICK HERE</button> */}
            </div>
            <div>
                {/* <p>{start}</p>
                <DateSelection start = {start} setStart = {setStart}/> */}
            </div>
            <div>
                <TimeSeries xAxis1 = {xAxis1} yAxis = {yAxis1} mounted = {mounted} setMounted = {setMounted}/>
            </div>
            <div>
                {/* <ColumnChart xAxis = {xAxis2} yAxis = {yAxis2}/> */}
            </div>
            <div>
                {/* <Sparkline1 yAxis = {yAxis1} totalAdults = {totalAdults}/> */}
            </div>
            <div>
                {/* <Sparkline2 yAxis = {yAxis4} totalChildren = {totalChildren}/> */}
            </div>
        </div>       
    </div>
  );
}

export default App;
