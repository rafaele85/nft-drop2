import styled from "styled-components";
import {BigNumber} from "@ethersproject/bignumber/src.ts/bignumber";

type Props = {
    address: any,
    totalSupply: BigNumber | undefined,
    claimedSupply: number | undefined,
    price: string | undefined
    onMint: () => Promise<void>
}

export const MintButton = (props: Props) => {
    const { address, totalSupply, claimedSupply } = props

    const handleMint = async () => {
        await props.onMint()
    }


    const mintDisabled = !address || totalSupply && totalSupply?.toNumber() === claimedSupply
    const price = props.price || '0'
    let mintLabel = `Mint NFTs (${price} ETH)`
    if (totalSupply && totalSupply?.toNumber() === claimedSupply) {
        mintLabel = 'SOLD OUT'
    }
    let bgcolor = 'palevioletred'
    let cursor = 'pointer'
    if (mintDisabled) {
        bgcolor = 'lightgray'
        cursor = ''
    }

    return (
        <Container>
            <Button
                onClick={handleMint}
                disabled={mintDisabled}
                bgcolor={bgcolor}
                cursor={cursor}
            >
                {mintLabel}
            </Button>
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

const Button = styled.button<{bgcolor: string, cursor: string}>`
  border: 0;
  outline: 0;
  border-radius: 40px;
  width: 100%;
  padding: 20px;
  text-align: center;
  background: ${p => p.bgcolor};
  color: white;
  cursor: ${p => p.cursor};
`
