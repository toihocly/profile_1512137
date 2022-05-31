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

const CvMobileEN = () => {
  return (
    <div className="container prelative" style={{ border: "2px solid #eee" }}>
      <div className="fixbacground">
        <div className="fixbacground-content">
          <h1 style={{ fontFamily: "Kanit" }}>ĐINH VĂN TUẤN HẢI</h1>
          <h5>M O B I L E - R E A C T N A T I V E </h5>
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
                <li>CSS Modules, JavaScript</li>
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
          <ObjectItem3 group="MOBILE REACT NATIVE">
            <ObjectItem4>
              <h3 className="titleColor">REACT NATIVE HOME FIX</h3>
              <h6>3/2020 - 10/2020</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: convert UI from figma to code logic</li>
                <li>
                  Position in the project: freelancer Frontend Mobile React
                  Native{" "}
                </li>
                <li>
                  Programming languages: ReactNative, JavaScript, CSS Modules{" "}
                </li>
                <li>
                  Main techniques: react-native-navigation,
                  @react-native-community/async-storage, react-native-paper,
                  react-native-swipeout , and more
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">REACT NATIVE TODOLIST</h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: New, View, Edit, Check complete, Delete task.</li>
                <li>Position in the project: FullStack </li>
                <li>Programming languages: ReactNative, JavaScript </li>
                <li>
                  Main techniques: react-navigation,
                  @react-native-community/async-storage, react-native-paper,
                  react-native-swipeout{" "}
                </li>
                <li>
                  Link Video Demo:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://youtu.be/u3bIZriwtN0", "_blank")
                    }
                  >
                    https://youtu.be/u3bIZriwtN0
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">REACT NATIVE ANIMATION BASIC</h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Content: Load image local and show its with animation.</li>
                <li>Position in the project: FullStack</li>
                <li>Programming languages: ReactNative, JavaScript</li>
                <li>Main techniques: Animated</li>

                <li>
                  Link Video Demo:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://youtu.be/0tCfmMQ03iI", "_blank")
                    }
                  >
                    https://youtu.be/0tCfmMQ03iI
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">
                REACT NATIVE CHAT REALTIME APPLICATION
              </h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  Content: Realtime chat application, Create account, Login,
                  Logout, Chat, Change name profile
                </li>
                <li>Position in the project: FullStack</li>
                <li>Programming languages: ReactNative, JavaScript</li>
                <li>
                  Main techniques: react-navigation, firebase (data realtime),
                  react-native-girft-chat
                </li>

                <li>
                  Link Video Demo:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://youtu.be/ltY8gPWw98E", "_blank")
                    }
                  >
                    https://youtu.be/ltY8gPWw98E
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">REACT NATIVE FAST WEATHER</h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  Content: Call api openweathermap.org to get weather
                  information, Search for weather
                </li>
                <li>Position in the project: FullStack</li>
                <li>Programming languages: ReactNative, JavaScript</li>
                <li>
                  Main techniques: react-navigation, fetch,
                  @react-native-community/geolocation
                </li>

                <li>
                  Link Video Demo:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://youtu.be/nXaoV6eA_XQ", "_blank")
                    }
                  >
                    https://youtu.be/nXaoV6eA_XQ
                  </span>
                </li>
              </ul>
            </ObjectItem4>
            <ObjectItem4>
              <h3 className="titleColor">REACT NATIVE FAST NEWS</h3>
              <h6>2019 - 2019</h6>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  Content: Call api newsapi.org to get news information, Search
                  news, Read news
                </li>
                <li>Position in the project: FullStack</li>
                <li>Programming languages: ReactNative, JavaScript</li>
                <li>Main techniques: update react-navigation v4, fetch</li>

                <li>
                  Link Video Demo:{" "}
                  <span
                    className="textLink"
                    onClick={() =>
                      window.open("https://youtu.be/WiOvv4wbaYs", "_blank")
                    }
                  >
                    https://youtu.be/WiOvv4wbaYs
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

export default CvMobileEN;
