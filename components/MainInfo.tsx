import styled from "styled-components";
import Image from 'next/image'

export const MainInfo = () => {
    return (
        <Container>
            <Banner src={'/assets/banner.png'} width={240} height={100}/>
            <Title>
                The BAYC Ape coding club | NFT Drop
            </Title>
            <Claimed>
                13 / 21 NFTs claimed
            </Claimed>
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

const Banner = styled(Image)`
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
`

const Claimed = styled.span`
  width: 100%;
  text-align: center;
  color: green;
`