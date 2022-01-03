import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from 'react';
import { Image, useColorScheme } from "react-native";
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  }
  else {
    return Asset.loadAsync(image);
  }
});

export default function App() {
  // hook을 이용한 preloading
  // useAssets & useFonts를 쓰면 loading 함수에서 다른 작업을 하지 못함
  const [assets] = useAssets([require("./assets/ic_flo_logo.png")])
  // const [loaded] = Font.useFonts(Ionicons.font);
  const [ready, setReady] = useState(false);

  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // const fonts = loadFonts([Ionicons.font]);
    // const images = loadImages(
    //   [require("./assets/ic_flo_logo.png")]);
    // await Promise.all([...images])
  };

  // if (!ready) {
  //   return (
  //     <AppLoading
  //       startAsync={startLoading}
  //       onFinish={onFinish}
  //       onError={console.error}
  //     />
  //   );
  // }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

