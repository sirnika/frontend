/* eslint-disable no-unused-vars */
import { useState } from "react";
const Wednesday = ({titi, carColor}) => {

  const [color, setColor] = useState("green");
  const [brands, setBrands]= useState({ name:"Nike",
  year:2024,
  color:"orange"
  });

  const goal =() =>{alert ("Goal");};
  const changeText=() =>{setColor ("white");};
  //const changeText=() => {setColor((prev)=>!prev);};
  const changeBrand=()=>{setBrands(prev=> {return {...prev, year:2023, color:'black'}})}
  return (
    <>
      <h1 style={titi}>Wednesday</h1>
      <div style={carColor}>prop
      <h1>The name of my car is {carColor.name}</h1>
      <h1>The color of my car is {carColor.color}</h1>
      <h1>The color of my car is {carColor.color=== "Blue" ? "Blue":"Not Blue"}</h1>
      <button onClick={()=> alert("Goal")}>Click Me</button>
      <button onClick= {goal}>Click me</button>
      <h1>my text is {color}</h1>
      <button onClick={()=>changeText("white")}>click to change color</button>
      <h1> My brand name is {brands.name}, the year is {brands.year} and the color is {brands.color}</h1>
      <button onClick= {changeBrand}>update brand</button>
      </div>
    </>
  );
};

export default Wednesday;
