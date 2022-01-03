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

const Image = styled.Image`
  width: 190px;
  height: 190px;
  border-radius: 5px;
  margin-top: 15px;
`;

interface AlbumImageProps {
    id: number;
};


const AlbumLargeImage: React.FC<AlbumImageProps> = ({ id }) => {

    const item = images.filter((item) => item.id === id);
    return (
        <Image source={item[0].path} />
    )
};

export default AlbumLargeImage;