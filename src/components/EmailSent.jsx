import React from "react";

export default function EmailSent() {
  return (
    <>
      <div class='row'>
        <div class='alert alert-success mt-3 col-6 offset-3' role='alert'>
          <p>Message Sent Successfully.We will contact you soon.</p>
        </div>
      </div>
      <br />
      <br />
      <form action='/'>
        <button class='btn btn-dark btn-home'>Go to home Page</button>
      </form>
    </>
  );
}
