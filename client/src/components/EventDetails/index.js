import React from "react";
import EventDescription from "../EventDescription";
import styled from "styled-components";
import moment from "moment";

const Details = styled.div`
  .event-name {
    color: var(--primary-color);
  }

  /* color icons (only for day of week, time, and location) */
  li > i {
    color: var(--primary-color);
  }

  /* remove column padding  */
  .col-8 {
    padding-right: 0;
    min-width: 66%;
  }

  .location {
    color: grey;
    font-size: 0.8em;
  }
`;

function EventDetails(props) {
  return (
    <>
      <div className="col-8">
        <Details>
          <div className="event-details">
            <h2 className="text-uppercase is-size-6">
              <strong>
                <span className="event-name">{props.title}</span>
              </strong>
            </h2>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="far fa-calendar-alt"></i>{" "}
                <span className="day-of-week">
                  {moment(props.start).format("MMDDYY") ===
                  moment(props.end).format("MMDDYY")
                    ? moment(props.start).format("dddd")
                    : moment(props.start).format("dddd") +
                      "-" +
                      moment(props.end).format("dddd")}
                </span>
              </li>
              <li className="list-inline-item">
                <i className="far fa-clock"></i>{" "}
                <span className="start-time">
                  {moment(props.start).format("LT")}
                </span>{" "}
                -{" "}
                <span className="end-time">
                  {moment(props.end).format("LT")}
                </span>
              </li>
              {props.location ? (
                <li className="list-item">
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <span className="location">{props.location}</span>
                </li>
              ) : null}
              <li className="list-item">
                <i className="fas fa-users"></i>{" "}
                <span className="attendees">44</span>
              </li>
            </ul>
            {props.description ? (
              <EventDescription id={props.id} description={props.description} />
            ) : null}
          </div>
        </Details>
      </div>
    </>
  );
}

export default EventDetails;
