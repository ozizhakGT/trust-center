import {keyframes} from "styled-components";

export const cardFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-35px);
  }
  30%,100% {
    opacity: 1;
    transform: translateY(0);
  }
`