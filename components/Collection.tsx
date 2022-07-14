import {SanityCollection} from "../types";
import styled from "styled-components";
import {urlFor} from "../sanity";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useAddress, useNFTDrop} from "@thirdweb-dev/react";
import {BigNumber} from "@ethersproject/bignumber/src.ts/bignumber";
import {MintButton} from "./MintButton";
import {Loading} from "./Loading";

type Props = {
    collection: SanityCollection
}

export const Collection = (props: Props) => {
    const router = useRouter();
    const nftDrop = useNFTDrop(props.collection.address)
    const address = useAddress()

    const [claimedSupply, setClaimedSupply] = useState<number>(0)
    const [totalSupply, setTotalSupply] = useState<BigNumber | undefined>()
    const [priceInEth, setPriceInEth] = useState<string>()
    const [isLoading, setLoading] = useState<boolean>(true)

    const fetchNFTDrop = async () => {
        if (!nftDrop) {
            return
        }
        try {
            setLoading(true)
            const claimed = await nftDrop.getAllClaimed()
            const total = await nftDrop.totalSupply()
            setClaimedSupply(claimed?.length || 0)
            setTotalSupply(total)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const fetchPrice = async () => {
        if (!nftDrop) {
            return
        }
        try {
            setLoading(true)
            const claimConditions = await nftDrop.claimConditions.getAll()
            const price = claimConditions?.[0]?.currencyMetadata?.displayValue
            setPriceInEth(price)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        void fetchNFTDrop()
    }, [nftDrop])

    useEffect(() => {
        void fetchPrice()
    }, [nftDrop])


    const handleClick = async () => {
        await router.push(`/nft/${props.collection._id}`)
    }

    const handleMint = async () => {
        if (!nftDrop || !address) {
            return
        }
        const quantity = 1

        setLoading(true)
        try {
            const tx = await nftDrop.claimTo(address, quantity)
            const receipt = tx[0].receipt
            const claimedTokenId = tx[0].id
            const claimedNFT = tx[0].data()
            console.log(receipt, claimedTokenId, claimedNFT)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    if (!isLoading) {
        return (<Loading />)
    }

    const url = urlFor(props.collection.mainImage).toString()

    return (
        <Container>
            <Banner src={url} onClick={handleClick} />
            <Title>
                {props.collection.title}
            </Title>
            <Description>
                {props.collection.description}
            </Description>
            <Claimed>
                {claimedSupply} / {totalSupply ? totalSupply.toString() : '0'} NFTs claimed
            </Claimed>
            <Bottom>
                <MintButton
                    address={address}
                    claimedSupply={claimedSupply}
                    totalSupply={totalSupply}
                    price={priceInEth}
                    onMint={handleMint}
                />
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
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

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`