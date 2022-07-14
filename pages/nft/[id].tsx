import styled from "styled-components";
import {SideBanner} from "../../components/SideBanner";
import {Header} from "../../components/Header";
import {MainInfo} from "../../components/MainInfo";
import {MintButton} from "../../components/MintButton";

export const NFTDropPage = () => {
    return (
        <Container>
            <Left>
                <SideBanner />
            </Left>
            <Right>
                <Top>
                    <Header />
                </Top>
                <Center>
                    <MainInfo />
                </Center>
                <Bottom>
                    <MintButton />
                </Bottom>
            </Right>
        </Container>
    )
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
  }
  align-items: flex-start;
  justify-content: flex-start;
`

export const Left = styled.div`
  width: 100%;
  min-width: fit-content;
  @media (min-width: 640px) {
    width: 20%;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: linear-gradient(125deg, rgb(5, 5, 98) 0%, #f58477 100%);
`
export const Right = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 640px) {
    width: 80%;
    height: 100%;
  }
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`



