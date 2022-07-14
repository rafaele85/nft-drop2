import {SanityCollection} from "../types";
import styled from "styled-components";
import {urlFor} from "../sanity";
import {useRouter} from "next/router";

type Props = {
    collection: SanityCollection
}

export const Collection = (props: Props) => {
    const router = useRouter();
    const handleClick = async () => {
        await router.push(`/nft/${props.collection._id}`)
    }
    const url = urlFor(props.collection.mainImage).toString()
    return (
        <Container onClick={handleClick}>
            <Banner src={url} />
            <Title>
                {props.collection.title}
            </Title>
            <Description>
                {props.collection.description}
            </Description>
            <Claimed>
                13 / 21 NFTs claimed
            </Claimed>
        </Container>
    )
}

export const Container = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`

const Banner = styled.img`
  width: 15rem;
  height: 24rem;
`

const Title = styled.span`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
`

const Description = styled.span`
  width: 100%;
  font-size: 0.8rem;
  color: black;
  text-align: center;
`

const Claimed = styled.span`
  width: 100%;
  text-align: center;
  color: green;
`
