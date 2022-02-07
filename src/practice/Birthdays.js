import React, {useState} from "react";
import { data } from "./data";
import Birthday from "./Birthday";

const Birthdays = () => {

    const [dayList, setdayList] = useState(data);

    const handleClick = ()=> {
        setdayList([])
    }

  return (
    <div className="container">
    <div className="b-list">
    <h4 className="b-head">{dayList.length} Birthdays today</h4>
      {dayList.map((b) => {
        return (
          <div key={b.id}>
            <Birthday {...b} />
          </div>
        );
      })}

      <button onClick={handleClick}>Clear all</button>
    </div>
    </div>
  );
};

export default Birthdays;
