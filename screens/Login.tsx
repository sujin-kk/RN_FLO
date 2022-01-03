import { useNavigation } from "@react-navigation/native";
import react, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView, TouchableWithoutFeedback, TouchableNativeFeedback  } from "react-native"; 
import styled from "styled-components/native";
import { DARK_GREY, GREY, LIGHT_BLACK, MAIN_COLOR } from "../colors";

const Container = styled.View`
    background-color: white;
    flex: 1;
    align-items: center;
`;

const BackBtn = styled.Image`
    width: 30px;
    height: 30px;
    margin-top: 40px;
    margin-left: auto;
`

const Logo = styled.Image`
    width: 85px;
    height: 40px;
    margin-top: 20px;
`;

const LoginBtn = styled.View`
    width: 90%;
    height: 50px;
    margin-top: 20px;
    background-color: ${MAIN_COLOR};
    justify-content: center;
    align-items: center;
`;

const BtnText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 600;
`;

const TLoginBtn = styled.View`
    flex-direction: row;
    width: 90%;
    height: 50px;
    margin-top: 30px;
    background-color: ${LIGHT_BLACK};
    justify-content: center;
    align-items: center;
`;

const PhoneLoginBtn = styled.View`
    flex-direction: row;
    width: 90%;
    height: 50px;
    margin-top: 30px;
    border-style: solid;
    border-color: ${DARK_GREY};
    border-width: 0.2px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const TLoginIcon = styled.Image`
    width: 28px;
    height: 28px;
    margin-right: 3px;
`;

const PLoginIcon = styled.Image`
    width: 33px;
    height: 33px;
    margin-right: 0;
`;

const HWrapper = styled.View` 
    margin-top: 40px;
    flex-direction: row;
`;

const SocialIcon = styled.Image`
    width: 40px;
    height: 40px;
    margin: 0 5px;
`;

const InputWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const IdWrapper = styled.View`
    flex-direction: row;
    width: 90%;
    margin-top: 60px;
    align-items: center;
`;

const LoginInput = styled.TextInput`
    border-bottom-color: ${GREY};
    border-bottom-width: 1px;
    margin-bottom: 30px;
    font-size: 16px;
    height: 40px;
    width: 150px;
    margin-horizontal: 10px;
`;

const PwInput = styled.TextInput`
    border-bottom-color: ${GREY};
    border-bottom-width: 1px;
    margin-bottom: 0px;
    font-size: 16px;
    height: 40px;
    width: 330px;
    margin-horizontal: 10px;
    margin-bottom: 30px;
`;

const Login = () => {
    const [ id, setId ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ pw, setPw ] = useState("");
    // const [isFullContent, setIsFullContent] = useState(false);

    // setIsFullContent(id!=="" && email!=="" && pw!=="" ? true : false);

    // useEffect(() => {
    //     console.log("모두 입력");
    // }, [isFullContent]);
    
    const navigation = useNavigation();

    const successLogin = () => {
        navigation.navigate("Tabs", {
            screen: "Home",
        })
    };

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <BackBtn style={{ marginEnd: 20 }} source={require('../assets/btn_actionbar_close.png')} />
            </TouchableWithoutFeedback>
            <Logo resizeMode="stretch" source={require('../assets/ic_flo_logo.png')} />

            <InputWrapper>
                <IdWrapper>
                    <LoginInput onChangeText={(text) => {setId(text)}} placeholder="아이디" placeholderTextColor={GREY} />
                    <Text style={{ fontSize: 16, marginBottom: 20 }}>@</Text>
                    <LoginInput onChangeText={(text) => setEmail(text)} keyboardType="email-address" defaultValue="gmail.com" placeholder="이메일" placeholderTextColor={GREY}/>
                </IdWrapper>
                <PwInput onChangeText={(text) => setPw(text)} secureTextEntry={true} placeholder="비밀번호" placeholderTextColor={GREY} />
            </InputWrapper>

            <TouchableNativeFeedback onPress={successLogin}>
                <LoginBtn>
                    <BtnText>로그인</BtnText>
                </LoginBtn>
            </TouchableNativeFeedback>

            <TLoginBtn>
                <TLoginIcon source={require('../assets/ico_20_logo_tid_white.png')}/>
                <BtnText>아이디로 로그인</BtnText>
            </TLoginBtn>

            <PhoneLoginBtn>
                <PLoginIcon source={require('../assets/btn_setting_phone.png')}/>
                <BtnText style={{ color: "black" }}>휴대폰 번호로 로그인</BtnText>
            </PhoneLoginBtn>
            
            <HWrapper>
                <SocialIcon source={require('../assets/naver_44.png')} />
                <SocialIcon source={require('../assets/kakako_44.png')} />
                <SocialIcon source={require('../assets/apple_44.png')} />
            </HWrapper>
        </Container>
    );
}

export default Login;