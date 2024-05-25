import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import Home from "./Home";
// import Team from "./Team";
// import ContactForm from "./ContactForm";
// import EventList from "./Event";
// import Wie from "./Wie";
// import Aess from "./Aess";

import DefaultLayout from "./DefaultLayout";
import ShowEvents from "./ShowEvents";
import SpinnerFullPage from "./SpinnerFullPage";

const Home = lazy(() => import("./Home"));
const Team = lazy(() => import("./Team"));
const ContactForm = lazy(() => import("./ContactForm"));
const EventList = lazy(() => import("./Event"));
const Wie = lazy(() => import("./Wie"));
const Aess = lazy(() => import("./Aess"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SpinnerFullPage />}>
        <DefaultLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/Wie' element={<Wie />} />
            <Route path='/aess' element={<Aess />} />
            <Route path='/events' element={<EventList />} />
            <Route path='/events/:id' element={<ShowEvents />} />
          </Routes>
        </DefaultLayout>
      </Suspense>
    </Router>
  );
}

export default App;
