import React from "react";
import pic from "../img1.jpg";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // const themeChanger = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Disable Dark Mode");
  //   }
  // };

  return (
    <>
      <div
        className="container"
        /* bg-${props.mode}`} style={myStyle}*/ style={{
          backgroundColor: props.mode === "dark" ? "#2d2e2f" : "white",
        }}
      >
        <div className="accordion w-75 py-4 m-auto" id="accordionExample">
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button bg-${props.mode} text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is this Website for?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(6 7 9 / 76%)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Welcome to my first ever web application.</strong> You
                can use this website to quickly change the case of any sentence,
                paragraph or just text. The summary section will provide you
                with usefull details about your text aswell.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How to use the app?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(6 7 9 / 76%)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>Using the service is super simple.</strong> Just simply
                enter the text and use the buttons below the{" "}
                <code>Text Area</code> to manupulate the text in various ways,
                more options and settings will be added overtime to make it even
                more usefull. You can directly copy the altered text also by
                click of a button.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button collapsed bg-${props.mode} text-${
                  props.mode === "dark" ? "light" : "dark"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Know more about the website.
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(6 7 9 / 76%)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>
                  Kindly save your eyes by using the Dark mode in poorly lit
                  environments.
                </strong>{" "}
                Enabling the dark mode will make everything dark and easy on
                eyes. This is the first time I have used ReactJS to build a
                Single Page application and implemented a proper dark mode in it
                also. Really happy how it turned out so far, hopefully will be
                adding more stuffs to it. Thank you for checking this site out.{" "}
                <br />
                -Sopan Roy
              </div>
            </div>
          </div>
        </div>
        {/* <button
        type="button"
        onClick={themeChanger}
        className="btn border-white my-3"
        id="btn"
        style={myStyle}
      >
        {btnText}
      </button> */}
      </div>
      <div className="container rounded w-75">
        <img
          src={pic}
          style={{ padding: "2rem" }}
          alt="some text"
          className="img-fluid rounded"
        ></img>
      </div>
    </>
  );
}
