import React from "react";
import styled from "styled-components/native";

const images = [
    {
        id: 1,
        path: require('../assets/img_album_exp2.png')
    },
    {
        id: 2,
        path: require('../assets/img_album_exp.png')
    },
    {
        id: 3,
        path: require('../assets/img_album_exp3.png')
    },
    {
        id: 4,
        path: require('../assets/img_album_exp4.jpg')
    },
    {
        id: 5,
        path: require('../assets/img_album_exp5.jpg')
    },
    {
        id: 6,
        path: require('../assets/img_album_exp6.jpg')
    },
    {
        id: 7,
        path: require('../assets/img_album_exp7.jpg')
    },
    {
        id: 8,
        path: require('../assets/img_album_exp8.jpg')
    },
    {
        id: 9,
        path: require('../assets/img_album_exp9.jpg')
    },
    {
        id: 10,
        path: require('../assets/img_album_exp10.jpg')
    }
];

interface AlbumImageProps {
    albumIdx: number;
};

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

const AlbumSmallImage: React.FC<AlbumImageProps> = ({ albumIdx }) => {

    const item = images.filter((item) => item.id === albumIdx);
    return (
        <Image source={item[0].path} />
    )
};

export default AlbumSmallImage;