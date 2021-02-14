import styled from 'styled-components';
import Link from 'next/link'
import { Theme, Button } from '../../globalStyles'

const StyledLink = ({ as, children, className, href }) => (
    <Link href={href} as={as} passHref>
        <a className={className}>{children}</a>
    </Link>
)

export const MenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    padding: 10px;
    background: ${Theme.purple + 20};
    box-shadow: 0 5px 10px ${Theme.purple + 10};
    width: 100px;
    height: 100px;
    border-radius: 50% 0% 0% 50%;
`

export const MenuButton = styled.div`
    border-radius: 5%;
    background-color: ${Theme.purple + 50};
    padding: 4px;
`

export const ProfileImg = styled.img`
    position: fixed;
    top: 12px;
    right: 12px;
    background-color: ${Theme.purple + 90};
    border-radius: 50%;
    width: 74px;
    height: 74px;
`