import styled from "styled-components";

export const MintButton = () => {
    const handleMint = () => {

    }
    return (
        <Container>
            <Button onClick={handleMint}>Mint NFTs (0.01 ETH)</Button>
        </Container>
    )
}

const Container = styled.div`
  --cls: MintButton-Container;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px;
`

const Button = styled.button`
  border: 0;
  outline: 0;
  border-radius: 40px;
  width: 100%;
  padding: 20px;
  text-align: center;
  background: palevioletred;
  color: white;
  cursor: pointer;
`
