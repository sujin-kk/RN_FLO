import React from "react";
import react from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";
import { BACK_LIGHT_GREY, DARK_GREY, GREY } from "../colors";
import Ranking from "../components/Ranking";
import musicData from "../musicData.json";

const Container = styled.View`
  background-color: white;
  flex: 1;
  align-items: center;
`;

const Header = styled.View`
  flex-direction: row;
  margin-top: 50px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: flex-start;
  align-self: flex-start;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 600;
`;

const SearchBox = styled.TextInput`
  margin-top: 25px;
  background-color: ${BACK_LIGHT_GREY};
  height: 45px;
  width: 90%;
  padding: 10px;
  font-size: 16px;
`;

const ListContainer = styled.View`
  margin-top: 30px;
`;

const ListHeader = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

const Seperator = styled.View`
  height: 5px;
`;

const Search = () => {
  const albumData = musicData.albums;

  return (
    <Container>
      <Header>
        <Title>검색</Title>
      </Header>
      <SearchBox placeholderTextColor={GREY} placeholder="검색어를 입력하세요" />

      <ListContainer>
        <ListHeader>
          <ListTitle>급상승 검색어</ListTitle>
          <Text style={{ marginLeft: 120, fontSize: 12, color: GREY }}>2022.01.13 17:00 기준</Text>
        </ListHeader>
        <FlatList
          ItemSeparatorComponent={Seperator}
          data={albumData}
          keyExtractor={(item) => item.id+""}
          renderItem={({ item }) =>(
              <Ranking
                  id={item.id+""}
                  singer={item.singer}
              />
            )}
        />
      </ListContainer>

    </Container>
  );
}

export default Search;