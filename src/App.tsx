import React from 'react';
import './App.scss';
import { Linkedin, Github, FileText } from 'react-bootstrap-icons';

function App() {
  return (
    <div id="main-div">
      <svg id="wave" style={{transform:"rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(62, 233.802, 243, 1)" offset="0%"></stop><stop stop-color="rgba(143.107, 11, 255, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:1}} fill="url(#sw-gradient-0)" d="M0,49L96,343L192,441L288,98L384,245L480,392L576,392L672,294L768,441L864,98L960,392L1056,0L1152,245L1248,245L1344,98L1440,49L1536,245L1632,392L1728,392L1824,0L1920,245L2016,147L2112,343L2208,343L2304,196L2304,490L2208,490L2112,490L2016,490L1920,490L1824,490L1728,490L1632,490L1536,490L1440,490L1344,490L1248,490L1152,490L1056,490L960,490L864,490L768,490L672,490L576,490L480,490L384,490L288,490L192,490L96,490L0,490Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 50px)", opacity:0.9}} fill="url(#sw-gradient-1)" d="M0,196L96,49L192,196L288,392L384,441L480,343L576,98L672,49L768,147L864,49L960,294L1056,441L1152,294L1248,392L1344,392L1440,98L1536,196L1632,147L1728,49L1824,343L1920,49L2016,98L2112,147L2208,245L2304,98L2304,490L2208,490L2112,490L2016,490L1920,490L1824,490L1728,490L1632,490L1536,490L1440,490L1344,490L1248,490L1152,490L1056,490L960,490L864,490L768,490L672,490L576,490L480,490L384,490L288,490L192,490L96,490L0,490Z"></path></svg>
      <p className="centerTitle">Subhajit Das</p>
      <p className="centerText">Hi! I am a computer science student at the Georgia Institute of Technology.</p>
      <div id="shelf">
        <div className="shelfItem" onClick={takeToPage("https://www.linkedin.com/in/subhajit-das-760b861aa/")}>
          <div className='icon'>
            <Linkedin></Linkedin>
          </div>
          LinkedIn
        </div>
        <div className="shelfItem" onClick={takeToPage("https://github.com/subatuba21")}>
          <div className='icon'>
            <Github></Github>
          </div>
          Github
        </div>
        <div className="shelfItem" onClick={takeToPage("https://drive.google.com/file/d/13TzmwS2YkUn6gsoqydNs052hQdfrkF39/view?usp=share_link")}>
          <div className='icon'>
            <FileText />
          </div>
          Resume
        </div>
      </div>
    </div>
  );
}

function takeToPage(url: string) {
  return () => window.open(url, '_blank');
}

export default App;
