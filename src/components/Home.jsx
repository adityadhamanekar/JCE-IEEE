import React from "react";

const cards = [
  {
    title: "Access to resources",
    text: `Members gain access to a wealth of resources including
                    technical papers, journals, and conferences, offering
                    valuable insights and knowledge in various technological
                    domains.`,
    img: "Access.JPG",
  },
  {
    title: "Professional Development",
    text: `IEEE offers workshops, seminars, and conferences tailored to enhance students
                  skills and knowledge, helping them stay updated with the latest advancements in technology and
                  industry trends.`,
    img: "conference.JPG",
  },
  {
    title: "Networking Opportunities",
    text: `IEEE provides a platform for students to connect with professionals, researchers,
                  and peers in their field of interest, fostering valuable networking opportunities for collaboration
                  and career advancement.`,
    img: "networking.JPG",
  },
  {
    title: "Career",
    text: `Being a part of IEEE can enhance students resumes, demonstrating their commitment
                  to professional development and their engagement with the broader technological community, which can
                  lead to internship and job opportunities in reputable companies.`,
    img: "Career.JPG",
  },
];

function Home() {
  return (
    <>
      <div className='Main'>
        <h1 className='heading'>
          <span className='span'>Welcome to</span> <br /> IEEE STUDENT BRANCH!
          <br />
          <small className='text-body-secondary'>
            <h3 className='heading1'>Jain College of Engineering, Belagavi</h3>
          </small>
        </h1>
        <img src='/img/group.JPG' alt='grp' className='grp' />
        <br />
        <br />
      </div>
      <div className='about'>
        <h2 className='heading_2'>
          <b>About</b>
        </h2>
        <div className='abt_para'>
          <p>
            IEEE is the world's largest technical professional organization
            dedicated to advancing technology for the benefit of humanity. Our
            IEEE student branch at Jain College of Engineering, Belgavi is
            dedicated to advancing technology and fostering professional
            development among students. We have been at the forefront of
            organizing workshops, seminars, competitions, and community outreach
            programs. Our diverse membership base enjoys numerous benefits,
            including networking opportunities and access to cutting-edge
            resources. Led by a dedicated team of student leaders, we have
            forged partnerships with industry leaders and community
            organizations to enrich the student experience. Over the years, we
            have received recognition for our outstanding contributions to the
            IEEE community. Whether you're a student looking to expand your
            network, develop new skills, or make a difference in the community,
            we invite you to get involved with our vibrant student branch. Join
            us in shaping the future of technology and engineering.
          </p>
        </div>
        <br />
        <br />
        <div>
          <h2 className='heading_2 '>
            <b>Become a IEEE Member</b>
          </h2>
          <h3 className='heading_3'>
            <b>Why join IEEE?</b>
          </h3>
        </div>
        <div className='container d-flex justify-content-center'>
          <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 g-4'>

            {cards.map((card, index) => (
            <div className='col col-item ' key={index}>
              <div
                className='card h_card h-100 border-primary'
                style={{ width: "18rem" }}
              >
                <img
                  src={`/img/${card.img}`}
                  className='card-img-top h_img'
                  alt='...'
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <b>{card.title}</b>
                  </h5>
                  <p className='card-text'>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
            ))}
            {/* Repeat similar card structures for other items */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
