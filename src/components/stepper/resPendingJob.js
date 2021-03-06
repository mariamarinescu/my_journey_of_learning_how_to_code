import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const imgPersonal = require('../../assets/personal.png');
const imgSocial = require('../../assets/social.png')
const imgM = require('../../assets/methodical.png');

function resPendingJob() {

  return <div id="pending">
    <h4 style={{ display: 'block', margin: '0 auto', position: 'relative' }}>Even though at the beginning of my journey, I can state that I have:</h4>
    <div className="content">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5 className="card-title">Personal Skills</h5>

            <img
              className="card-front"
              src={imgPersonal}
              alt=""
              style={{ maxWidth: '50%', maxHeight: '40%' }}
            />
          </div>
          <div className="flip-card-back ">
            <h5 className="card-title title1">With the following sub-skills:</h5>
            <ul className="card-text text1">
              <li> I am a <strong>fast learner</strong></li>
              <li> I am <strong>driven</strong> to continue to evolve <strong>towards reaching my full potential</strong></li>
              <li> I am genuinely <strong>curious</strong></li>
            </ul>

            <h5 className="title2 ">I have flaws like:</h5>
            <ul className="text2 card-text">
              <li> I am <strong>not</strong> a very <strong>patient</strong> person, <strong>for the moment</strong>, but it's useful having a lot of lessons.</li>
              <li> I can get scared easily. And I like to be scared 😅 </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flip-card2">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5 className="card-title">Social Skills</h5>

            <img
           className="card-front"
              src={imgSocial}
              alt=""
              style={{ maxWidth: '50%', maxHeight: '40%' }} />
          </div>
          <div className="flip-card-back ">
            <h5 className="card-title title3"> With the following sub-skills:</h5>
            <ul className="card-text text3" >
              <li> I am <strong>fully present with everyone I interact</strong>, caring about their needs and understand them </li>
              <li> I am one of the lucky ones, because, until this moment in time, I started to gain <strong>social and self awareness</strong> and it helps me at every step I take.</li>
            </ul>
          </div>
        </div>
      </div>



      <div className="flip-card3">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5 className="card-title">Methodical Skills</h5>
            <img
              className="card-front"
              src={imgM}
              alt=""
              style={{ maxWidth: '50%', maxHeight: '40%', position: 'relative', top: '100px' }} />

          </div>
          <div className="flip-card-back">
            <h5 className="card-title title4">With the following sub-skills:</h5>
            <ul className="card-text text4">
              <li > delivery of value oriented.</li>
              <li> <strong>passionate about disruptive tech.</strong></li>
              <li> eager to be part of a team that builds tomorrow's technology.</li>
              <li> <strong>resistant to pressure</strong></li>
              <li> I am mixing artistic and technical thinking.</li>
              <li> eager to learn to code in Java.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h3>Furthermore, I'm definitely <strong>not</strong>:</h3>
    <div className="not">

    <p> <CloseIcon style={{ width: "35px", height: "35px", color: 'black' }} /> clinging on the technologies I used so far, especially on the backend side </p>
    <p> <CloseIcon style={{ width: "35px", height: "35px", color: 'black' }} /> looking for a dull job to work at </p>
    <p> <CloseIcon style={{ width: "35px", height: "35px", color: 'black' }} /> doing the same things every day </p>
    </div>
  </div>

  {/* <h4>Even though at the beginning of my journey, I can state that I am:</h4>
       <ul className="check">
         <li> a fast learner</li>
         <li> delivery of value oriented</li>
         <li> passionate about disruptive tech</li>
         <li> eager to be part of a team that builds tomorrow's technology</li>
         <li> driven to continue to evolve towards reaching my full potential</li>
         <li> fully present with everyone I interact, caring about their needs and understand them</li>
         <li> genuinely curious</li>
         <li> resistant to pressure => able to code in a high stress work environment </li>
         <li> one of the lucky ones, because, until this moment in time, I started to gain social and self awareness <br/>and it helps me at every step I take.</li>
         <li> trying to combine artistic and technical thinking 😁</li>
         <li> eager to learn to code in Java</li>
  
       </ul>
       */}





  // return <div className="content">
  //   <h4>Even though at the beginning of my journey, I can state that I am:</h4>
  //   <ul className="check">
  //     <li> a fast learner</li>
  //     <li> delivery of value oriented</li>
  //     <li> passionate about disruptive tech</li>
  //     <li> eager to be part of a team that builds tomorrow's technology</li>
  //     <li> driven to continue to evolve towards reaching my full potential</li>
  //     <li> fully present with everyone I interact, caring about their needs and understand them</li>
  //     <li> genuinely curious</li>
  //     <li> resistant to pressure => able to code in a high stress work environment </li>
  //     <li> one of the lucky ones, because, until this moment in time, I started to gain social and self awareness <br/>and it helps me at every step I take.</li>
  //     <li> trying to combine artistic and technical thinking 😁</li>
  //     <li> eager to learn to code in Java</li>

  //   </ul>
  //   <h4>And also that I am <strong>not</strong>:</h4>

  //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> clinging on the technologies I used so far, especially on the backend side </p>
  //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> looking for a dull job to work at </p>
  //   <p> <CloseIcon style={{ width: "15px", height: "15px" }} /> doing the same things every day </p>



  // </div>

}

export { resPendingJob }