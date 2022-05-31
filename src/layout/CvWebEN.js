import React, { Component } from "react";
import "../assets/css/styleCV.css";
import {
  SchoolRounded as SchoolIcon,
  BubbleChartRounded as BubbleIcon,
  PublicRounded as PublicIcon,
  PieChartRounded as ChartIcon,
  AssignmentIndRounded as AssignmentIcon,
  FingerprintRounded as FingerprintIcon,
} from "@material-ui/icons";
import ImageBirthday from "../assets/images/birthday-cake.png";
import ImageMail from "../assets/images/mail.png";
import ImageLocation from "../assets/images/placeholder.png";
import ImagePhone from "../assets/images/smartphone-call.png";
import ImageFacebook from "../assets/images/facebook-logo.png";
import ImageSkype from "../assets/images/skype-logo.png";
import ImageGit from "../assets/images/github-logo.png";
import ImageAvatar from "../assets/images/IMG_1819.JPG";

// view title and content
const CVObject1 = (props) => {
  return (
    <div className="sl-object1">
      <div className="sl-object1-title">{props.name}</div>
      <span style={{ fontSize: 13 }}>{props.children}</span>
    </div>
  );
};

// view panal
const Panel1 = (props) => {
  return (
    <div
      style={{
        padding: "5px 10px 5px 10px",
        backgroundColor: "#00A765",
        borderRadius: 5,
        marginBottom: 10,
        color: "#fff",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

// item 1 list
const ObjectItem1 = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 10,
      }}
    >
      <img alt="" src={props.icon} style={{ height: 20, width: 20 }} />
      <div style={{ marginLeft: 10 }}>{props.children}</div>
    </div>
  );
};

// item 2 activities
const ObjectItem2 = (props) => {
  return (
    <div style={{ paddingTop: 10 }}>
      <h3 className="titleColor">{props.title}</h3>
      <div>
        <span style={{ fontWeight: 600 }}>{props.position}</span>
        <span
          style={{
            borderLeft: "1px solid black",
            paddingLeft: 10,
            marginLeft: 10,
            fontSize: 13,
          }}
        >
          {props.year}
        </span>
      </div>
    </div>
  );
};

// item 3 porjects
const ObjectItem3 = (props) => {
  return (
    <div style={{ borderTop: "5px solid #313a3a", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          background: "white",
          left: 26,
          top: -19,
          fontSize: 20,
          fontWeight: 600,
          paddingLeft: 20,
          paddingRight: 20,
          color: "#00a765",
          fontFamily: "Kanit",
        }}
      >
        {props.group}
      </div>
      {props.children}
    </div>
  );
};

// item 3 porjects
const ObjectItem4 = (props) => {
  return (
    <div
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: "1px solid #eee",
      }}
    >
      {" "}
      {props.children}
    </div>
  );
};

// view object
const CVObject2 = (props) => {
  const icon = (name) => {
    switch (name) {
      case "EDUCATION":
        return <SchoolIcon />;
      case "OBJECTIVE":
        return <BubbleIcon />;
      case "SKILLS":
        return <ChartIcon />;
      case "ACTIVITIES":
        return <PublicIcon />;
      case "PROJECTS":
        return <AssignmentIcon />;
      case "WORK EXPERIENCE":
        return <FingerprintIcon />;

      default:
        break;
    }
  };

  return (
    <div className="object2">
      <div className="object2-title">
        <span style={{ padding: 5, fontWeight: 700, fontSize: 20 }}>
          {props.name}
        </span>
        <div className="object2-icon">{icon(props.name)}</div>
      </div>
      <div style={{ marginTop: 20, color: "#000" }}>{props.children}</div>
    </div>
  );
};

const CvWebEN = () => {
  return (
    <div className="container prelative" style={{ border: "2px solid #eee" }}>
      <div className="fixbacground">
        <div className="fixbacground-content">
          <h1 style={{ fontFamily: "Kanit" }}>ĐINH VĂN TUẤN HẢI</h1>
          <h5>F R O N T E N D - W E B </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className="slideleft">
            <div className="sl-avatar">
              <div className="sl-avatar-i">
                <img className="sl-avatar-image" alt="" src={ImageAvatar} />
              </div>
            </div>
            <CVObject1 name="INTRODUCE">
              Hello.I come from the Central Highlands where with land and wind.
              I am an active, enthusiastic person in work, love singing, sports
              activities, can make friends quickly, I believe it can bring joy
              to others.
            </CVObject1>
            <CVObject1 name="CONTACT">
              <ObjectItem1 icon={ImageBirthday}>01/01/1997</ObjectItem1>
              <ObjectItem1 icon={ImageMail}>dvthai97@gmail.com</ObjectItem1>
              <ObjectItem1 icon={ImageLocation}>
                156,7 Đường số 47, Hiệp Bình Chánh, TP. Thủ Đức
              </ObjectItem1>
              <ObjectItem1 icon={ImagePhone}>0981864335</ObjectItem1>
            </CVObject1>
            <CVObject1 name="SOCIAL NETWORK">
              <ObjectItem1 icon={ImageFacebook}>
                facebook.com/tuanhai.dinhvan
              </ObjectItem1>
              <ObjectItem1 icon={ImageSkype}>live:dvthai97</ObjectItem1>
              <ObjectItem1 icon={ImageGit}>github.com/toihocly</ObjectItem1>
            </CVObject1>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="lr-header1"></div>
          <div className="lr-body1">
            <CVObject2 name="EDUCATION">
              <h3 className="titleColor">INFORMATION TECHNOLOGY</h3>
              <h5>University of Science | 2015 - 2021</h5>
              <div>
                GPA/10: 7.54 (Details:{" "}
                <span
                  className="textLink"
                  onClick={() =>
                    window.open("https://tinyurl.com/y6fquprg", "_blank")
                  }
                >
                  https://tinyurl.com/y6fquprg
                </span>{" "}
                )
              </div>
            </CVObject2>
            <CVObject2 name="OBJECTIVE">
              <Panel1>
                Try to learning as much as possible and doing my best in order
                to accomplish my tasks
              </Panel1>
              <Panel1>
                I want to be a good Frontend developer and use English better
              </Panel1>
            </CVObject2>
            <CVObject2 name="SKILLS">
              <ul style={{ paddingLeft: 20 }}>
                <li>HTML5 / CSS3 / SCSS / JavaScript</li>
                <li>using JavaScript library (ReactJS, ReactNative )</li>
                <li>Server-side programming(Nodejs)</li>
                <li>Git & Github</li>
                <li>Object-oriented programming</li>
                <li>Data structures and algorithms</li>
                <li>Teamwork / Personal work</li>
                <li>PhotoShop cc, figma</li>
                <li>English Skill (TOIEC 560)</li>
              </ul>
            </CVObject2>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: 15 }}>
        <CVObject2 name="ACTIVITIES">
          <ObjectItem2
            title="RUN FOR THE HEART 2017"
            position="member"
            year="2017 - 2017"
          />
          <ObjectItem2
            title="SPRING EVENT WITH SOLDIER 2017"
            position="member"
            year="2017 - 2017"
          />
          <ObjectItem2
            title="RUN FOR THE HEART 2018"
            position="member"
            year="2018 - 2018"
          />
          <ObjectItem2
            title="FIRE PREVENTION TRAINING AT DEK TECHNOLOGIES VIỆT NAM 2020"
            position="member"
            year="2020 - 2020"
          />
        </CVObject2>
        <CVObject2 name="WORK EXPERIENCE">
          <ObjectItem4>
            <h3 className="titleColor">DEK TECHNOLOGIES VIỆT NAM</h3>
            <h6>2019 - 2022</h6>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                Main Jobs: POC Infrastructure System Management, Matrix Find
                Talent Members in Internal, iOT-iOS Application (connect via
                Internet and Satellite)
              </li>
              <li>
                Position in the company: Web Frontend developer, iOS Mobile
                developer{" "}
              </li>
              <li>
                Programming languages: ReactJS, JavaScript, HTML, CSS, Swift{" "}
              </li>
            </ul>
          </ObjectItem4>
        </CVObject2>
        <CVObject2 name="PROJECTS">
          <ObjectItem3 group="WEB REACTJS">
            <ObjectItem4>
              <h3 className="titleColor">FRONT END WEB BASIC</h3>
              <h6>2018 - 2018</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: Project interface on vehicle product sales. </li>
                <li>Position in the project: FullStack </li>
                <li>Programming languages: ReactJS, JavaScript, HTML, CSS </li>
                <li>Main techniques: react-router-dom </li>
                <li>
                  Precondition click to start server:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open(
                        "https://codesandbox.io/s/j25jm74v0v?file=/src/App.js",
                        "_blank"
                      )
                    }
                  >
                    Start Server on CodeSandBox
                  </span>
                </li>
                <li>
                  Link:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://j25jm74v0v.csb.app/", "_blank")
                    }
                  >
                    https://j25jm74v0v.csb.app/
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">FRONTEND WEB TODOLIST</h3>
              <h6>2018 - 2018</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: ToDoList interface project</li>
                <li>Position in the project: FullStack</li>
                <li>
                  Programming languages: Rea ReactJS, JavaScript, HTML, SCSS
                </li>
                <li>Main techniques: LocalStorage, Material-UI Cores</li>

                <li>
                  Link:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open(
                        "https://todolist-c95f0.firebaseapp.com/",
                        "_blank"
                      )
                    }
                  >
                    https://todolist-c95f0.firebaseapp.com
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">FRONTEND WEB BANKING</h3>
              <h6>2018 - 2018</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: The project design interface is used to </li>
                <li style={{ marginLeft: 20, listStyleType: "disc" }}>
                  Bank side: Create Users, credit cards for Users, Deposit money
                  into credit card accounts for Users
                </li>
                <li style={{ marginLeft: 20, listStyleType: "disc" }}>
                  User side: Manage your credit card (including: transfer
                  function for other accounts, view transaction history)
                </li>
                <li>Position in the project: FrontEnd</li>
                <li>Programming languages: ReactJS, JavaScript, HTML, CSS</li>
                <li>
                  Main techniques: react-router-dom, Material-UI Cores,
                  react-redux, firebase deploy, remotemysql.com
                </li>
                <li style={{ color: "red" }}>
                  <strong>
                    [Ctrl shift N] run incognito mode if you can't run project
                  </strong>
                </li>
                <li>Link: </li>
                <li>
                  [ View FrontEnd]:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://kk5ypj6lj3.csb.app", "_blank")
                    }
                  >
                    https://kk5ypj6lj3.csb.app
                  </span>
                </li>
                <li>
                  [ Edit FrontEnd]:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open(
                        "https://codesandbox.io/s/kk5ypj6lj3",
                        "_blank"
                      )
                    }
                  >
                    https://codesandbox.io/s/kk5ypj6lj3
                  </span>
                </li>
                <li>
                  ---------------------------------------------------------------
                </li>
                <li>
                  [ View BackEnd]:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open(
                        "https://7wvrqn44x6.sse.codesandbox.io/",
                        "_blank"
                      )
                    }
                  >
                    https://7wvrqn44x6.sse.codesandbox.io/
                  </span>
                  <strong>(Must run BackEnd Before)</strong>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">
                APPLICATION SUPPORTING WORKING GROUP
              </h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  Content: TASM is an application that supports job management
                  in a project. Besides, it also helps users more convenient
                  with the Chat and Call functions to bring the most convenience
                  to users. TASM is a combination of many features of individual
                  applications. It encapsulates the most quintessential things
                  to create the most unique thing.{" "}
                </li>
                <li>
                  Description: Graduation project, The application will be slow
                  at the first run by the server for free. You can create an
                  account and experience the application
                </li>
                <li>Position in the project: FrontEnd</li>
                <li>
                  Programming languages: ReactJS, JavaScript, HTML, CSS, SCSS,
                  TypeScript, NodeJS, MongoDB, ...
                </li>
                <li>
                  Main techniques: react-router-dom, Material-UI Cores,
                  react-redux, PearServer, WebRTC, MinioServer
                </li>
                <li>
                  Link:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://tasmhcmus.herokuapp.com/", "_blank")
                    }
                  >
                    https://tasmhcmus.herokuapp.com/
                  </span>
                </li>
              </ul>
            </ObjectItem4>
          </ObjectItem3>
        </CVObject2>
      </div>
    </div>
  );
};

export default CvWebEN;
