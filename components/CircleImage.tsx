import React from "react";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 400px;
  background-color: rgba(255, 255, 255, 0.5);
`;

interface PosterProps {
    path: string;
};

const Poster: React.FC<PosterProps> = ({path}) => 
    <Image source={ require(path) } />

export default Poster;