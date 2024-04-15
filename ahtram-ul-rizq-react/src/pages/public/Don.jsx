import React from 'react'
import Storypart2 from '../../components/DonComponents/Storypart2';
import Registerpart from '../../components/DonComponents/Registerpart';
import Wayyoujoin from '../../components/DonComponents/wayyoujoin';
import Registerdonor from '../../components/DonComponents/Registerdonor';
import Chairyhome from '../../components/DonComponents/Chairyhome';



const Don = () => {
  return (
    <>
      <div>
         <Chairyhome />
      </div>
      <div>
        <Storypart2 />
      </div>
      <div>
        <Registerpart/>
      </div>
      <div>
        <Wayyoujoin/>
      </div>
      <div>
        <Registerdonor />
      </div>
    </>
  );
}

export default Don