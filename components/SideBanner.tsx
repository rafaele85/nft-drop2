import styled from "styled-components";

export const SideBanner = () => {
    return (
        <Container>
            <StyledImage src={'/assets/bayc-1.png'} width={100} height={100} />
            <Title>
                BAYC Apes
            </Title>
            <SubTitle>
                A collection of BAYC apes who live and breathe React!
            </SubTitle>

        </Container>
    )
}


export const Container = styled.div`
  --cls: SideBanner-Container;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1080px) {
    padding: 20px;
  }
`

const StyledImage = styled.img`
  --cls: SideBanner-StyledImage;
  width: 10rem;
  height: 12rem;
  object-fit: cover;
  border: 4px solid orange;
  border-radius: 20px;
  @media (min-width: 1080px) {
    width: 18rem;
    height: 22rem;
  }
`

const Title = styled.h1`
`

const SubTitle = styled.small`
`