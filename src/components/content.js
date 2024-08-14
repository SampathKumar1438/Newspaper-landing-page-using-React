import React from "react";
import Video1 from './Assests/video1.mp4';
import Video2 from './Assests/video2.mp4';

function content() {
  return (
    <div class='contentvd'>
      <video class="vd1" width="80%" height="600px"  loop autoPlay muted>
        <source src={Video1} type="video/mp4" />
      </video>
      <video class='vd2' width="80%" height="600px"  loop autoPlay muted>
        <source src={Video2} type="video/mp4" />
      </video>
    </div>
  );
}

export default content;
