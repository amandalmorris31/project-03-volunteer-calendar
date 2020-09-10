import React from "react";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";

function EventData({ start, end, title, description, location, id }) {
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
      />
      <ResponseBtns
        id={id}
        doConfirm={confirmEvent}
        handleBtnClick={handleBtnClick}
      
      />
    </div>
  );
}
export default EventData;
