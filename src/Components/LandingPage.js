import React, { useEffect, useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  // UseState for Content Adjustment
  const [content, setContect] = useState(100);
  // UseState for Font Adjustment
  const [font, setFont] = useState(18);
  // UseState for font line height Adjustment
  const [height, setHeight] = useState(18);
  // UseState for font space Adjustment
  const [space, setSpace] = useState(1);
  // UseState for Align Text Adjustment
  const [align, setAlign] = useState("");
  // UseState for Title
  const [countTitle, setCountTitle] = useState(0);
  // UseState for links
  const [countLinks, setCountLinks] = useState(0);
  // Flag for text magnifier
  const [flag, setFlag] = useState(false);
  // Para State For Text Maginifier Data
  const [para, setPara] = useState("");
  // UseState For Cout
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById("showText").style.display = "none";
  }, []);
  // Text Magnifier Handler
  const magnifierHandler = () => {
    if (count !== 0) {
      setFlag(false);
      setPara("");
      document.getElementById("showText").style.display = "none";
    } else {
      setCount((val) => ++val);
      setFlag(true);
    }
  };
  // Onhover Text Function
  function showText(event) {
    if (flag === true) {
      document.getElementById("showText").style.display = "block";
      var x = event.clientX;
      var y = event.clientY;
      let data = document.elementFromPoint(x, y);
      setPara(data.innerHTML);
    }
  }

  // Content Size Increase Handler
  const contentUp = () => {
    setContect((val) => (val += 10));
  };
  // Content Size Decrease Handler
  const contentDown = () => {
    setContect((val) => (val -= 10));
  };
  // Title Handler
  const titleHandler = () => {
    let tempHeading = document.getElementsByClassName("heading");

    if (countTitle === 0) {
      setCountTitle((val) => ++val);
      for (let i = 0; i < tempHeading.length; i++) {
        tempHeading[i].style.border = "2px solid blue";
      }
    } else if (countTitle > 0) {
      setCountTitle(0);
      for (let i = 0; i < tempHeading.length; i++) {
        tempHeading[i].style.border = "none";
      }
    }
  };
  // Link Handler
  const linkHandler = () => {
    let tempHeading = document.getElementsByClassName("link");

    if (countLinks === 0) {
      setCountLinks((val) => ++val);
      for (let i = 0; i < tempHeading.length; i++) {
        tempHeading[i].style.border = "2px solid red";
      }
    } else if (countLinks > 0) {
      setCountLinks(0);
      for (let i = 0; i < tempHeading.length; i++) {
        tempHeading[i].style.border = "none";
      }
    }
  };
  // Increase Font Handler
  const increaseFont = () => {
    setFont((val) => (val += 5));
    setHeight((val) => (val += 5));
  };
  // Decrease Font Handler
  const decreaseFont = () => {
    setFont((val) => (val -= 5));
  };
  // Increase Font Height Handler
  const heightHandler = () => {
    setHeight((val) => (val += 5));
  };
  // Decrease Font Height Handler
  const downHeight = () => {
    if (height <= 18) {
      setHeight(18);
    } else {
      setHeight((val) => (val -= 5));
    }
  };
  // Increase Font Spacing Handler
  const upSpacing = () => {
    setSpace((val) => (val += 5));
  };
  // Decrease Font Spacing Handler
  const downSpacing = () => {
    if (space <= 1) {
      setSpace(1);
    } else {
      setSpace((val) => (val -= 5));
    }
  };
  // Readable Handler
  const readableHandler = () => {
    if (space === 1) {
      setSpace(5);
    } else if (space === 5) {
      setSpace(1);
    }
  };
  // Align Center
  const alignCenter = () => {
    setAlign("center");
  };
  // Align Left
  const alignLeft = () => {
    setAlign("left");
  };
  // Align Right
  const alignRight = () => {
    setAlign("right");
  };
  // Default Handler
  const defaultHandler = () => {
    setContect(100);
    setFont(18);
    setHeight(18);
    setSpace(1);
    setAlign("left");
    setFlag(false);
    setPara("");
    document.getElementById("showText").style.display = "none";
  };

  return (
    <div>
      <section>
        <div className="container">
          <div
            style={{
              zoom: `${content}%`,
              fontSize: `${font}px`,
              lineHeight: `${height}px`,
              wordSpacing: `${space}px`,
              textAlign: `${align}`,
            }}
            className="container__left"
          >
            <div id="showText" className="magnifierDiv">
              {para}
            </div>
            <h1
              onMouseOver={flag === true ? showText : null}
              className="heading"
            >
              Content Adjustment Tools
            </h1>

            <div
              onMouseOver={flag === true ? showText : null}
              className="container__content"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>
              <h1
                onMouseOver={flag === true ? showText : null}
                className="heading"
              >
                Heading 1
              </h1>
              <div onMouseOver={flag === true ? showText : null}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </div>
              <div className="linkDiv">
                <div className="link">
                  <a href="/">Link</a>
                </div>

                <div className="link">
                  <a href="/">Link</a>
                </div>
                <div className="link">
                  <a href="/">Link</a>
                </div>
              </div>
            </div>
            <div>
              <h1
                onMouseOver={flag === true ? showText : null}
                className="heading"
              >
                Heading 2
              </h1>
              <div onMouseOver={flag === true ? showText : null}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </div>
              <div className="linkDiv">
                <div className="link">
                  <a href="/">Link</a>
                </div>

                <div className="link">
                  <a href="/">Link</a>
                </div>
                <div className="link">
                  <a href="/">Link</a>
                </div>
              </div>
            </div>
          </div>
          <div className="container__right">
            <h1>Tools</h1>
            <div className="tools__div">
              <div className="left__tools">
                <div className="scaling">
                  <div className="highlight__left">
                    <button className="arrowBtn" onClick={contentUp}>
                      🔼
                    </button>
                    <span>Content Scaling</span>
                    <button className="arrowBtn" onClick={contentDown}>
                      🔽
                    </button>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlightDiv">
                    <button onClick={titleHandler} className="highlight__left">
                      <div>
                        <i className="fa fa-text-width"></i>
                      </div>
                      <div>Highlight Titles</div>
                    </button>
                    <button onClick={linkHandler} className="highlight__right">
                      <div>
                        <i className="fa fa-link"></i>
                      </div>
                      <div>Highlight Links</div>
                    </button>
                  </div>
                  <div></div>
                </div>
                <div style={{ marginTop: "2em" }} className="scaling">
                  <div className="highlight__left">
                    <button className="arrowBtn" onClick={increaseFont}>
                      🔼
                    </button>
                    <span>
                      <i className="fa fa-text-height"></i> Adjust Font Sizing
                    </span>
                    <button className="arrowBtn" onClick={decreaseFont}>
                      🔽
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "2em" }} className="scaling">
                  <div className="highlight__left">
                    <button className="arrowBtn" onClick={heightHandler}>
                      🔼
                    </button>
                    <span>
                      <i className="fa fa-text-height"></i> Adjust Line Height
                    </span>
                    <button className="arrowBtn" onClick={downHeight}>
                      🔽
                    </button>
                  </div>
                </div>
                <div style={{ marginTop: "2em" }} className="scaling">
                  <div className="highlight__left">
                    <button className="arrowBtn" onClick={upSpacing}>
                      🔼
                    </button>
                    <span>
                      <i className="fa fa-text-width"></i> Adjust Letter Spacing
                    </span>
                    <button className="arrowBtn" onClick={downSpacing}>
                      🔽
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    style={{ padding: "1em 7.5em" }}
                    onClick={defaultHandler}
                    className="highlight__left"
                  >
                    <div>Default</div>
                  </button>
                </div>
              </div>
              <div className="right__tools">
                <div>
                  <button onClick={readableHandler} className="highlight__left">
                    <div>
                      <i className="fa fa-font"></i>
                    </div>
                    <div>Readable Font</div>
                  </button>
                </div>

                <div>
                  <button
                    onClick={magnifierHandler}
                    className="highlight__left"
                  >
                    <div>
                      <i className="fa fa-search"></i>
                    </div>
                    <div>Text Magnifier</div>
                  </button>
                </div>
                <div>
                  <button onClick={alignCenter} className="highlight__left">
                    <div>
                      <i className="fa fa-align-center"></i>
                    </div>
                    <div>Align Center</div>
                  </button>
                </div>
                <div>
                  <button onClick={alignLeft} className="highlight__left">
                    <div>
                      <i className="fa fa-align-left"></i>
                    </div>
                    <div>Align Left</div>
                  </button>
                </div>
                <div>
                  <button onClick={alignRight} className="highlight__left">
                    <div>
                      <i className="fa fa-align-right"></i>
                    </div>
                    <div>Align Right</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
