import React from "react";
import "./item.css";

const SearchFilters = () => {
  return (
    <div className="search-filters">
      <h2>SEARCH FILTERS</h2>
      <div className="filter-group">
        <input type="text" placeholder="Search Food" className="search-input" />
        <h3>Categories</h3>
        <ul>
          <li><label><input type="radio" name="category" /> Sandwiches</label></li>
          <li><label><input type="radio" name="category" /> Fast Food</label></li>
          <li><label><input type="radio" name="category" /> Vegetarian</label></li>
          <li><label><input type="radio" name="category" /> Thai</label></li>
          <li><label><input type="radio" name="category" /> Non-Veg</label></li>
          <li><label><input type="radio" name="category" /> Salads</label></li>
        </ul>
      </div>

      <div className="filter-group">
        <h3>Food For</h3>
        <label><input type="checkbox" /> Delivery</label>
        <label><input type="checkbox" /> Pickup</label>
      </div>

      <div className="filter-group">
        <h3>Popular Tags</h3>
        <div className="tags">
          <span>Service </span>
          <span>Cookies</span>
          <span>Pizza</span>
          <span>Burger</span>
        </div>
      </div>

      <div className="filter-group">
        <h3>Rating</h3>
        <div className="rating">
          <label><input type="radio" name="rating" /> ★★★★★</label>
          <label><input type="radio" name="rating" /> ★★★★☆</label>
           
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
