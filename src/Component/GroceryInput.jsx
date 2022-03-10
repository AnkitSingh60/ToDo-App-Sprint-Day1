import React, { useState } from "react";

const GroceryInput = () => {
  const [value, setValue] = useState("");
  const [allData, setAllData] = useState([]);

  const handleChangeEvent = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setAllData((prev) => {
      return [...prev, value];
    });
    setValue("")
  };
  // console.log(allData);

  const handleDelete=(idx)=>{
    // console.log(idx.target.id)
    setAllData((prev)=>{
      let new_arr=[]
       for(var i=0;i<prev.length;i++){
          if(idx.target.id!=i){
            new_arr.push(prev[i])
          }
       }
       return new_arr
      })
    }

    const handleEnter=(e)=>{
      if(e.key==="Enter"){
        setAllData((prev) => {
          return [...prev, value];
        });
        setValue("")
      }
      
    }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={handleChangeEvent}
        onKeyDown={handleEnter}
        value={value}
      />
      <button onClick={handleSubmit} >Submit</button>
      <div>
        {allData.map((val,idx)=>{
          return(
            <h3 key={idx} id={idx} onClick={handleDelete}>{val}</h3>
            )
            
        })}
      </div>
    </div>
  );
};

export default GroceryInput;
