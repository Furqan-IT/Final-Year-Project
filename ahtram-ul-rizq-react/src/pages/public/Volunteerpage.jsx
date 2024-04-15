import React from 'react'
import Landingpage from '../../components/VolunteerPComp/Landingpage';
import Intro from '../../components/VolunteerPComp/Intro';
import Third from '../../components/VolunteerPComp/Third';
import Forth from '../../components/VolunteerPComp/Forth';
import Fifth from '../../components/VolunteerPComp/Fifth';

const Volunteerpage = () => {
  return (
    <>
      <div>
        <Landingpage />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <Third />
      </div>
      <div>
        <Forth />
      </div>
      <div>
        <Fifth />
      </div>
    </>
  );
}

export default Volunteerpage