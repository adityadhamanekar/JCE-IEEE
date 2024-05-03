import React from "react";
import DefaultLayout from "./DefaultLayout";
import Home from "./Home";
import Team from "./Team";
import ContactForm from "./ContactForm";
import EventList from "./Event";
import ShowEvents from "./ShowEvents";
import Wie from "./Wie";
import Aess from "./Aess";
// index.jsx or App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/Wie' element={<Wie />} />
          <Route path='/aess' element={<Aess />} />
          <Route path='/events' element={<EventList />} />
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
