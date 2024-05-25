import React from "react";

function SpinnerFullPage() {
  return (
    <div className='spinner-container'>
      <div className='spinner'>
        <svg>
          <use href='/img/icons.svg#icon-loader'></use>
        </svg>
      </div>
    </div>
  );
}

export default SpinnerFullPage;
