/* global gapi */

import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import CalHeader from "../components/CalHeader";
import Search from "../components/Search";
import moment from "moment";

const GOOGLE_API_KEY = "AIzaSyAtHz02Yzb-TGWflfO9YLXH7pwXX_oKDEQ";

function Calendar() {
  //setup useState to equal events and have a function that can change the state of events
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("mounted");
    //call getEvents function to pull calendar data
    getEvents();
  }, []);

  const getEvents = () => {
    //this function is called on page load--ie gapi.load('client', START)
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY,
          // Array of API discovery doc URLs for APIs used by the quickstart
          DISCOVERY_DOCS: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
        })
        .then(function () {
          //taking the API from above and allowing the path below to access the events in prettyawesomepractice007@gmail.com public calendar
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/prettyawesomepractice007@gmail.com/events?singleEvents=true`,
          });
        })
        .then(
          (response) => {
            //define a variable res that only pulls the events from the response

            let res = response.result.items;
            res = res.filter((event) => {
              return event.end.dateTime >= moment().format();
            });
            res = res.sort((a, b) => {
              return a.end.dateTime.localeCompare(b.end.dateTime);
            });
            console.log(res);

            //setEvents redefines events to equal the array res
            setEvents(res);
          },
          //this is a fail safe in case start() does not run
          function (reason) {
            console.log(reason);
          }
        );
    }
    //once getEvents is called, it will initially load the client and the function start() will be called
    gapi.load("client", start);
  };

  return (
    <>
      <CalHeader />
      {/* <Search handleInputChange={this.handleInputChange} /> */}
      {events.map((event) => {
        return (
          <EventCard
            title={event.summary}
            start={event.start.dateTime}
            end={event.end.dateTime}
            description={event.description}
            location={event.location}
            key={event.id}
            id={event.id}
          />
        );
      })}
    </>
  );
}

export default Calendar;
