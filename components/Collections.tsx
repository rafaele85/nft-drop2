import {SanityCollection} from "../types";
import styled from "styled-components";
import {Collection} from "./Collection";

type Props = {
    collections: SanityCollection[]
}

export const Collections = (props: Props) => {
    const jsx: JSX.Element[] = []
    for (let collection of props.collections) {
        const id = collection._id
        jsx.push((
            <Collection collection={collection} key={id}/>
        ))
    }
    return (
        <Container>
            {jsx}
        </Container>
    )
}

export const Container = styled.div`
  --cls: Collections-Container;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: rgba(211, 211, 211, 0.95);
  padding: 20px;
  border-radius: 40px;
`

