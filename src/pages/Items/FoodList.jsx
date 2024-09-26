import React from "react";
import "./item.css";

const foods = [
  { title: "Food 1", img:"https://th.bing.com/th/id/OIP.C0B52rj_PjlQ6PmrxEwsfQHaE-?w=246&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", price: "$23.00", rating: 4, },
  { title: "Food 2", img:"", price: "$23.00", rating: 4, img: "https://th.bing.com/th/id/OIP.HYBACeqQZ1P00QeEppEI6QHaE7?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { title: "Food 3", img:"", price: "$23.00", rating: 4, img: "https://th.bing.com/th/id/OIP.DCdNnIWY5UhtA0JfJVqMngHaD4?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { title: "Food 4",  img:"",price: "$23.00", rating: 4, img: "https://th.bing.com/th/id/OIP.Ma3gmjTOvNWAfFdYYZQQrQHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
   
];

const FoodList = () => {
  return (
    <div className="food-list">
       
      <div className="food-grid">
        {foods.map((food, index) => (
          <div key={index} className="food-item">
            <img src={food.img} alt={food.title} />
            <h4>{food.title}</h4>
            <p>{food.price}</p>
            <div className="rating">
              {"★".repeat(food.rating)}
              {"☆".repeat(5 - food.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
