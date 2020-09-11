import React from "react";
import axios from "axios";
import Date from "../Date";
import EventDetails from "../EventDetails";
import ResponseBtns from "../ResponseBtns";

function EventData({
  start,
  end,
  title,
  description,
  location,
  id,
  handleBtnClick,
}) {
  function confirmEvent(e) {
    console.log(e.target.id);

    // console.log("confirming event", id);

    //post to server with event and user id. user id might be on server in cookie
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
