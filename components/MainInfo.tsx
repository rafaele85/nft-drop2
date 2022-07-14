import styled from "styled-components";
import {Collections} from "./Collections";
import {SanityCollection} from "../types";

type Props = {
    collections: SanityCollection[]
}

export const MainInfo = (props: Props) => {
    return (
        <Container>
            <Collections collections={props.collections} />
        </Container>
    )
}

const Container = styled.div`
  --cls: MainInfo-Container;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`

