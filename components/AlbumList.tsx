import React from "react";
import { FlatList, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { DARK_GREY, BLACK } from "../colors";
import AlbumMedia from "./AlbumMedia";

const ListContainer = styled.View`
  margin-bottom: 20px;
`;

const ListTitle = styled.Text`
  color: ${BLACK};
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const HSeperator = styled.View`
  width: 10px;
`;

interface AlbumListProps {
    title: string;
    data: any[];
};

const AlbumList: React.FC<AlbumListProps> = ({ title, data }) => {
    return (
    <ListContainer>
        <ListTitle>{title}</ListTitle>

        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            ItemSeparatorComponent={HSeperator}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) =>(
                <AlbumMedia
                    id={item.id}
                    albumName={item.albumName}
                    singer={item.singer}
                />
            )}
        />
    </ListContainer>    
)};

export default AlbumList;