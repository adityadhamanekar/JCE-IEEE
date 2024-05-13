import React from "react";
import sampleEvents from "./eventData";
import { Link } from "react-router-dom";

function EventList() {
  return (
    <div className='event_body'>
      <div className='event_page'>
        <div className='d-flex justify-content-center'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 event_row'>
            {sampleEvents.map((event, index) => (
              <div className='col' key={index}>
                <div className='d-flex justify-content-center h-100'>
                  <div
                    className='card h-100 event_card'
                    style={{ width: "25rem" }}
                  >
                    <img
                      src={`/poster/${event.eventPoster}`}
                      className='card-img-top event_img'
                      alt='...'
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{event.eventName}</h5>
                      <p className='card-text'>
                        <i className='fa-regular fa-calendar'></i> &nbsp;{" "}
                        {event.eventDate}
                      </p>
                      <Link to={`/events/${index}`}>
                        <button className='btn btn-dark'>Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventList;
