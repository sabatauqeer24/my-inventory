import React from "react";
import { useState } from "react";
import data from "./data.json";
import axios from "axios";
const Home = () => {
  const [value, setValue] = useState("");
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/myInventory/home/search",
        { withCredentials: true }
      );
      // axios.post("http://localhost:3001/api/myInventory/home/search", {
      //   withCredentials: "true",
      // });
      console.log(response.data, "this is all items ");
    } catch (error) {
      console.log("Error with protected request:", error);
    }
  };
  const Onsearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search", searchTerm);
  };
  return (
    <div>
      <div className="logo">my Inventory</div>
      <p>Account</p>
      <p>Theme</p>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="search...."
          className="form__input"
          id="search_bar"
          autoComplete="on"
        />
        <button onClick={(() => Onsearch(value), handleSearch)}> Search</button>
        <div className="search-container">
          <div className="dropdown">
            {
              (console.log("query filtering called "),
              data
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const itemValue = item.itemValue;
                  return (
                    searchTerm &&
                    itemValue.startsWith(searchTerm) &&
                    itemValue !== searchTerm
                  );
                }, console.log("query filtering ended "))
                .map((item) => (
                  <div
                    className="dropdown-row"
                    onClick={() => Onsearch(item.itemValue)}
                    key={item.itemValue}
                  >
                    {console.log("query mapping called ")}
                    {item.itemValue}
                  </div>
                )))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
