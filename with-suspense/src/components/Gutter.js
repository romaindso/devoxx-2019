/* 
Credits @Jean Loup Trolliard
https://github.com/jtrollia/ 
*/
import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const draw = props => keyframes`
  0% {
    opacity: 0;
    transform: ${props.y ? "scaleY(0)" : "scaleX(0)"};
  }

  100% {
    opacity: 1;
    transform: ${props.y ? "scaleY(1)" : "scaleX(1)"};
  }
`;

const StyledGutterWrapper = styled.div`
  position: absolute;
  width: ${props => (props.y ? "2px" : "100%")};
  height: ${props => (props.y ? (props.full ? "auto" : "100%") : "2px")};
  right: ${props => (props.right ? 0 : "auto")};
  top: ${props => (props.top ? 0 : "auto")};
  bottom: ${props => (props.bottom ? 0 : "auto")};
  left: ${props => (props.left ? 0 : "auto")};
`;

const StyledGutter = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => (props.color ? props.color : "#000")};
  opacity: 0;
  animation-name: ${props => draw(props)};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: ${props => 0.5 * props.step}s;
  animation-fill-mode: forwards;
  transform-origin: ${props => props.x || "left"} ${props => props.y || "top"};
`;

const Gutter = ({
  mobileOnly,
  full,
  step,
  x,
  y,
  color,
  right,
  left,
  top,
  bottom
}) => (
  <StyledGutterWrapper
    mobileOnly={mobileOnly}
    full={full}
    x={x}
    y={y}
    right={right}
    left={left}
    top={top}
    bottom={bottom}
  >
    <StyledGutter step={step} full={full} x={x} y={y} color={color} />
  </StyledGutterWrapper>
);

Gutter.propTypes = {
  mobileOnly: PropTypes.bool,
  step: PropTypes.number,
  full: PropTypes.bool,
  x: PropTypes.string,
  y: PropTypes.string,
  color: PropTypes.string
};

Gutter.defaultProps = {
  mobileOnly: false,
  step: 1,
  full: false,
  x: null,
  y: null
};

export default Gutter;
