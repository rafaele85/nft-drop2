import styled from "styled-components";
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";

export const Header = () => {
    const address = useAddress()
    const disconnect = useDisconnect()
    const authenticate = useMetamask()

    const isLoggedIn = !!address

    const handleLogin = async () => {
        await authenticate()
    }

    const handleLogout = async () => {
        await disconnect()
    }

    const jsxLoginButton = (isLoggedIn
            ?
                (<LogoutButton onClick={handleLogout}>Sign Out </LogoutButton>)
            :
                (<LoginButton onClick={handleLogin}>Sign In </LoginButton>)
    )

    const jsxLoggedInAs = (isLoggedIn
        ?
            (<LoggedInAs>You are logged in with wallet {address}</LoggedInAs>)
       :
            null
    )

    return (
        <StyledHeader>
            <TitleAndButton>
                <Title>
                    The <TM>BAYC</TM> NFT Marketplace
                </Title>
                {jsxLoginButton}
            </TitleAndButton>
            {jsxLoggedInAs}
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  --cls: Header-StyledHeader;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: black;
  padding-bottom: 20px;
`


const TitleAndButton = styled.div`
  --cls: Header-TitleAndButton;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: black;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`

const Title = styled.div`
`

const LoginButton = styled.button`
  border-radius: 30px;
  border: 0;
  outline: 0;
  background: palevioletred;
  color: white;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`

const LogoutButton = styled.button`
  border-radius: 30px;
  border: 0;
  outline: 0;
  background: lightgray;
  color: black;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`


const TM = styled.b`
`

const LoggedInAs = styled.span`
  width: 100%;
  text-align: center;
  color: red;
  padding-top: 5px;
`