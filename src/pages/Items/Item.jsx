import React from "react";
import FoodList from "./FoodList";
import SearchFilters from "./SearchBar";
import "./item.css"; 
 const Item = () => {
   return (
     <>
     <div className="item-container">
      <SearchFilters />
      <FoodList />
    </div></>
   )
 }
 
 export default Item