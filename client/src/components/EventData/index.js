import React from "react";
import axios from "axios";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";
function EventData({ start, end, title, description, location, id, user, handleBtnClick }) {
  function confirmEvent(e) {
    console.log(e.target.id);
}
  return (
    <div className="row">
      <Date start={start} end={end} />
      <EventDetails
        title={title}
        start={start}
        end={end}
        description={description}
        location={location}
        id={id}
        user={user}
      />
      <ResponseBtns
      //give ResponseBtns controller the following stuff.  Passing prop
      id={id}
      handleBtnClick={handleBtnClick}
      />
    </div>
  );
}
export default EventData;
