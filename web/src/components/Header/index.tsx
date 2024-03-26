import { Link } from "react-router-dom"
import styled from "styled-components"
import IconesHeader from "../IconesHeader"
import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    align-content: center;
    justify-content: space-between;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header