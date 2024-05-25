import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import sampleEvents from "./eventData";

function ShowEvents() {
  const location = useLocation();
  const { id } = useParams();
  const event = sampleEvents[id];

  if (!event) {
    // Handle case where event data is not available
    return <div>Event data not found!</div>;
  }

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will go back to the previous page
  };

  return (
    <div className='show_page'>
      <h2 className='heading_2 eventh'>Event details</h2>
      <p className='abt_para '>{event.eventDescription}</p>
      <h4 className='abt_para eventh'>
        <b>
          <i className='fa-regular fa-calendar'></i> &nbsp; {event.eventDate}
        </b>
      </h4>
      <h4 className='abt_para eventh'>
        <b>
          <i className='fa-solid fa-location-dot'></i> &nbsp; {event.eventVenue}
        </b>
      </h4>
      <h2 className='heading_2 eventh'>Photographs</h2>
      {event.eventPhotographs && event.eventPhotographs.length > 0 && (
        <div className='row row-cols-lg-2 row-cols-sm-1 g-4 grid'>
          {event.eventPhotographs.map((photo, index) => (
            <div className='col' key={index}>
              <div className='d-flex justify-content-center'>
                <div className='card h-100 card_allevent'>
                  <img
                    src={`/eventimages/${photo.photoData}`}
                    alt=''
                    className='all_event_img'
                  />
                  <div className='card-body'>
                    <p className='card-text'>{photo.photoname}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        className='btn btn-dark'
        style={{margin:'2rem'}}
        onClick={handleBack}
      >
        Back
      </button>
    </div>
  );
}

export default ShowEvents;
