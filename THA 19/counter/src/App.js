import React,{useState} from "react";
// import CalorieCard from "./Components/CalorieCard";
import Card from "./Components/Card";
import "./style.css"
const data = [{
  name: "Pizza",
  cals: 56
},
{
  name: "Burger",
  cals: 69
},
{
  name: "Momo",
  cals: 300
},
{
  name: "Coke",
  cals: 600
},
{
  name: "Shake",
  cals: 100
},
{
  name: "Sweet",
  cals: 200
},
{
  name: "Chocolates",
  cals: 350
}];
function App(list) {
  const [item, setData] = useState(list);
 
  return (
    <div className="App">
      <h2 id="heading">Calorie Read Only</h2>
      <div className="box">
        {/* <CalorieCard list={items}/> */}
        {
        data.map((element, index) => {
                return <Card key={index} setData={setData} cals={element.cals} name={element.name} index={index} data={data} />
            })
          }
      </div>
    </div>
  );
}

export default App;
