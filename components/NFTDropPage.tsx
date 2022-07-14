import styled from "styled-components";
import {SanityCollection} from "../types";
import {Header} from "./Header";
import {MainInfo} from "./MainInfo";

type Props = {
    collections: SanityCollection[]
}

export const NFTDropPage = (props: Props) => {
    return (
        <Container>
            <Top>
                <Header />
            </Top>
            <Center>
                <MainInfo collections={props.collections} />
            </Center>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px;
`

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
