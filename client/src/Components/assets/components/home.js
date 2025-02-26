

import axios from "axios";
import data from "./data.json";
import "./signup.css"
import { useState } from "react";


const Home = () => {

  const [searchValue, setSearchValue] = useState("");
  let  [Increase, setIncrease] = useState(" ")
  const [decrease, setDecrease] = useState(" ")
  // const [visble , setVisible] = useState(false)

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3000/api/myInventory/home/search", { itemValue: searchValue });
      console.log("Search submitted successfully");
    } catch (error) {
      console.error("Error submitting search:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);

  };
  


let updatedCount

  let counterIncrease =()=>{
  console.log(updatedCount);
  setIncrease(Increase + 1)   

  }   
  let counterDecrease =()=>{
    console.log(updatedCount);
    setDecrease(decrease - 1)   
  
    } 
    <div className="visible">hello its me </div>
  
  
  return (
    
    <div>
      <div>
        <div className="logo">my Inventory</div>
        <p>Account</p>
        <p>Theme</p>
        <div></div>
        <input
          type="text"
          value={searchValue}
          name="itemValue"
          placeholder="search..."
          onChange={handleSearch}
          autoComplete="on"
        />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = searchValue.toLowerCase();
              const itemValue = item.itemValue.toLowerCase();
              return searchTerm && itemValue.startsWith(searchTerm) && itemValue !== searchTerm
             
            },
            <div className="popup-hide">1x</div>
           )
            .map((item) => (
              <div
                className="dropdown-row"
                onClick={() => setSearchValue(item.itemValue)}
                key={item.itemValue}
              >
            
                <div   className="popup">  {item.itemValue}   </div>

                
                
                  
                  <button  className="popup-hide" onClick={counterIncrease}>
                  + {Increase} 
                </button>
                </div>
              ))}
        </div>
      </div>
      <button onClick={()=>{<h1>ghkj</h1>}}>click me </button>

    </div>

  );
}

export default Home;
