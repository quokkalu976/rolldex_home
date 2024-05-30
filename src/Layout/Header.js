import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
// import logoJpg from '../assets/img/logo.jpg';
import logoSvg from '../assets/img/logo.svg';
import logo2Jpg from '../assets/img/logo2.png';
import logo3Jpg from '../assets/img/logo3.png';
import { useTheme, useMediaQuery } from '@mui/material';

const TopHeader = styled.div`
  /* backdrop-filter: ${({ isScroll }) => (isScroll ? 'blur(40px)' : '')}; */
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #c4b8d1;
    div {
      margin: 0 20px;
    }
  }
`;

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [isScroll, setIsScroll] = useState(false);

  const eventScroller = () => {
    setIsScroll(document.documentElement.scrollTop >= 3);
  };

  useEffect(() => {
    window.addEventListener('scroll', eventScroller, true);
    return () => {
      window.removeEventListener('scroll', eventScroller, true);
    };
  }, []);

  return (
    <TopHeader className="bbbb" isScroll={isScroll}>
      <AppBar
        position="fixed"
        sx={{
          padding: `${matches ? '10px 20px' : '32px 80px'}  !important`,
          background: 'transparent',
          boxShadow: 'none',
          backdropFilter: isScroll ? 'blur(40px)' : '',
          // maxWidth: '1200px',
          // margin: '0 auto',
        }}
      >
        <HeaderWrap className="head">
          <img
            src={logoSvg}
            width={matches ? 140 : 140}
            height={32}
            alt="logo"
          />
          <div className="right">
            <div>Docs</div>
            {!matches && (
              <>
                <div>Join the Community</div>
                <div>
                  <img src={logo2Jpg} alt="logo2" />
                </div>
                <div>
                  <img src={logo3Jpg} alt="logo3" />
                </div>
              </>
            )}
          </div>
        </HeaderWrap>
      </AppBar>
    </TopHeader>
  );
}
