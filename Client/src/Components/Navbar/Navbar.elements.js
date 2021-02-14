import styled from 'styled-components';
import Link from 'next/link'
import { Theme, Button } from '../../globalStyles'

const StyledLink = ({ as, children, className, href }) => (
    <Link href={href} as={as} passHref>
        <a className={className}>{children}</a>
    </Link>
)


export const NavbarWrapper = styled.div`
    background-color: #fff;
    position: fixed;
    bottom: 0;
    height: 75px;
    width: 100%;
    padding: 0% 0% 10% 0%;
    z-index: 999;
`

export const TabWrapper = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 10px;
`




export const NavLink = styled(StyledLink)`
    ${({ active }) => active && `
        border-bottom: 6px solid ${Theme.purple};
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
    `}

`
