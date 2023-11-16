import { sculptureList } from "./data";
import { useState } from "react";


const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleNextClick = () => {
      if (index < sculptureList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    };

    const handleToggleContentClick = () => {
      setShowMore(showMore ? false : true);
    };

    const handlePreviousClick = () => {
      if (index <= sculptureList.length - 1 && index > 0) {
        setIndex(index - 1);
      } else {
        setIndex(sculptureList.length - 1);
      }
    };

    let sculpture = sculptureList[index];
    return (
      <div >
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
        <h1>{sculpture.name}</h1>
        <p>
          ({index + 1} of {sculptureList.length})
        </p>
        <button onClick={handleToggleContentClick}>
          {" "}
          {showMore ? "Show" : "Hide"} Content{" "}
        </button>
        <br />
        <p>{showMore ? null : sculpture.description}</p>
        <br />
        <img src={sculpture.url} alt={sculpture.alt} />
        <hr />
      </div>
    );

}

const ComponentsMemory = () => {
    
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <Gallery />
        <hr />
        <br />
        <br />
        <br />
        <Gallery />
      </div>
    );
    
}


export default ComponentsMemory