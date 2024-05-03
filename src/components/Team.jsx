import React from "react";

const ieeeMember = [
  {
    name: "Austin Pacheco",
    image: "Austin Pacheco.JPG",
    title: "Chair",
  },
  {
    name: "Chandan Kangralkar",
    image: "Chandan Kangralkar.JPG",
    title: "Vice Chair",
  },
  {
    name: "Kshiti Gaddigoudar",
    image: "Kshiti Gaddigoudar.JPG",
    title: "Secratery",
  },
  {
    name: "shreedhar Teradal",
    image: "Shreedhar.JPG",
    title: "Treasurer",
  },
  {
    name: "Rahul Halkarni",
    image: "Rahul.JPG",
    title: "Media Head",
  },
  {
    name: "Abhishek Basinayak",
    image: "Abhishek Basinayak.JPG",
    title: "Membership drive co-ordinator",
  },
];

const wieStudent = [
  {
    name: "Neha Patil",
    image: "Neha Patil.JPG",
    title: "WIE Chair",
  },
  {
    name: "Varsha V",
    image: "Varsha V.JPG",
    title: "WIE Vice Chair",
  },
  {
    name: "Chaitra Kolli",
    image: "Chaitra Kolli.JPG",
    title: "WIE Secratery",
  },
  {
    name: "Rohit Hegade",
    image: "Rohit Hegade.JPG",
    title: "WIE Treasurer",
  },
  {
    name: "Siddharth Jambagi",
    image: "Siddharth.JPG",
    title: "WIE Media Head",
  },
];

function Team() {
  return (
    <>
      <div className='execomh'>
        <h1>
          <b>Execom Members</b>
        </h1>{" "}
      </div>
      <div className='execom'>
        <div className='container d-flex justify-content-center'>
          <div className='row row-cols-1 row-cols-md-2  g-4 '>
            <div className='col col-item'>
              <div className='card execom_card' style={{ width: "18rem" }}>
                <img
                  src='/img/Krupa.JPG'
                  className='card-img execom_img'
                  alt='Krupa Rasane'
                />
                <div className='card-body'>
                  <h5 className='card-title card_prof_title'>
                    <b>Dr. Krupa Rasane</b>
                  </h5>
                  <p className='card-text card_prof_text'>
                    Branch Councellor, WIE Execom, IEEE Bangalore section
                  </p>
                </div>
              </div>
            </div>
            <div className='col col-item'>
              <div className='card execom_card' style={{ width: "18rem" }}>
                <img
                  src='/img/deepali.JPG'
                  className='card-img execom_img d_img'
                  alt='Deepali Patil'
                />
                <div className='card-body'>
                  <h5 className='card-title card_prof_title'>
                    <b>Prof. Deepali Patil</b>
                  </h5>
                  <p className='card-text card_prof_text'>Faculty Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='teamh'>
          <h1>
            <b>IEEE Student Execom 2024</b>
          </h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4 '>
            {/* IEEE members  */}
            {ieeeMember.map((member, index) => (
              <div className='col col-item' key={index}>
                <div className='card team_card' style={{ width: "18rem" }}>
                  <img
                    src={`/img/${member.image}`}
                    className='card-img-top team_img'
                    alt={member.name}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{member.name}</h5>
                    <p className='card-text'>{member.title}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Add similar card structures for other team members */}
          </div>
        </div>
      </div>

      <div>
        <div className='wieteamh'>
          <h1>
            <b>WIE Student Execom 2024</b>
          </h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4'>
            {/* WIE */}
            {wieStudent.map((member, index) => (
              <div className='col col-item' key={index}>
                <div className='card team_card' style={{ width: "18rem" }}>
                  <img
                    src={`/img/${member.image}`}
                    className='card-img-top team_img'
                    alt={member.name}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{member.name}</h5>
                    <p className='card-text'>{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Add similar card structures for other WIE team members */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
