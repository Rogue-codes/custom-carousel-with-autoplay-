import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
function Slider({ sliderArr }) {
  // active states
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const moveRightLeft = (direction) => {
    // if left button is clicked
    if (direction === "left") {
      // if active left is 0 move to the last element in the array index
      // else if it is greater than zero, subtract the active index by 1
      setActive(active === 0 ? sliderArr.length - 1 : active - 1);
    } else {
      setActive(active === sliderArr.length - 1 ? 0 : active + 1);
    }
  };

  // handle the slide show
  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        moveRightLeft("right");
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [active, sliderArr.length, autoPlay]);

  return (
    <Container
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {sliderArr.map((img, i) => (
        <div
          className={active === i ? "img_container active" : "img_container"}
          key={i}
        >
          <img src={img.imgLink} alt="" />
          <div className="left" onClick={() => moveRightLeft("left")}>
            <AiOutlineLeft />
          </div>
          <div className="right" onClick={() => moveRightLeft("right")}>
            <AiOutlineRight />
          </div>

          <p>
            Showing slide {active + 1} of {sliderArr.length}
          </p>
        </div>
      ))}
      <div className="circle_container">
        {sliderArr.map((dot, i) => (
          <div
            className={active === i ? "dot activeDot" : "dot active"}
            key={i}
            onClick={() => setActive(i)}
          ></div>
        ))}
      </div>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  @media (max-width: 768px) {
    width: 95%;
    min-height: 80vh;
  }
  width: 80%;
  height: 80vh;
  border: 5px solid #000;
  .img_container {
    height: 90%;
    width: 100%;
    position: relative;
    display: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .left {
      position: absolute;
      padding: 1%;
      left: 0;
      top: 50%;
      transition: all 0.5s linear;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      &:hover {
        background: #000;
      }
    }
    .right {
      position: absolute;
      padding: 1%;
      right: 0;
      top: 50%;
      transition: all 0.5s linear;
      color: #fff;
      font-size: 2rem;
      cursor: pointer;
      &:hover {
        background: #000;
      }
    }
    p {
      position: absolute;
      top: 1%;
      left: 2%;
      font-weight: 800;
    }
  }
  .active {
    height: 90%;
    width: 100%;
    position: relative;
    display: block;
    animation: fade 1.5s ease;
    @keyframes fade {
      from {
        opacity: 0.4;
      }
      to {
        opacity: 1;
      }
    }
  }
  .circle_container {
    width: 50%;
    height: 8%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transition: all 0.5s linear;
      border: 1px solid #fff;
      cursor: pointer;
    }
    .activeDot {
      background-color: #fff;
    }
  }
`;
