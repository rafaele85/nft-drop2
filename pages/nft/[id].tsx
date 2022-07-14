import styled from "styled-components";
import {SideBanner} from "../../components/SideBanner";
import {Header} from "../../components/Header";
import {MintButton} from "../../components/MintButton";
import {SanityCollection} from "../../types";
import {sanityClient} from "../../sanity";
import {Collection} from "../../components/Collection";

type Props = {
    collection: SanityCollection
}

const CollectionPage = (props: Props) => {
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
                    <Collection collection={props.collection} />
                </Center>
                <Bottom>
                    <MintButton />
                </Bottom>
            </Right>
        </Container>
    )
}


export default CollectionPage


type Ctx = {
    params: {
        id: string
    }
}

export const getServerSideProps = async (ctx: Ctx) => {
    const query = `
    *[_type == "collection" && _id == $id][0]{
        _id,
        title,
        address,
        description,
        nftCollectionName,
        mainImage,
        previewImage,
        slug {
            current
        },
        creator-> {
            _id,
            name,
            address
        }
    }`
    const collection = await sanityClient.fetch<SanityCollection[]>(query, {id: ctx.params.id})
    console.log(collection)
    return {
        props: {
            collection
        }
    }
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
