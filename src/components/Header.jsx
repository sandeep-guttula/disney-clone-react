import React from 'react'
import styled from 'styled-components';

const navData =[
    {
        id: 1,
        title: 'HOME',
        icon: '/images/home-icon.svg',
    },
    {
        id: 2,
        title: 'SEARCH',
        icon: '/images/search-icon.svg',
    },
    {
        id: 3,
        title: 'WATCHLIST',
        icon: '/images/watchlist-icon.svg',
    },
    {
        id: 4,
        title: 'ORIGINALS',
        icon: '/images/original-icon.svg',
    },
    {
        id: 5,
        title: 'MOVIES',
        icon: '/images/movie-icon.svg',
    },
    {
        id: 6,
        title: 'SERIES',
        icon: '/images/series-icon.svg',
    }
]
console.log(navData.map(item => console.log(item)));


function Header() {
  return (
    <Nav>
        <Logo src="./images/logo.svg"/>
        <NavMenu>
            {navData.map((item) => {
                return(
                <a>
                    <img src={item.icon} />
                    <span>{item.title}</span>
                </a>
            )})}
        </NavMenu>
        <UserImg  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"/>
    </Nav>
  )
}

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        text-decoration: none;
        display: flex;
        color: white;
        align-items: center;
        padding: 0 12px;
        display: flex;
        gap: 3px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute; 
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

export default Header
