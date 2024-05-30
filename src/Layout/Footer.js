import Box from '@mui/material/Box';
import styled from '@emotion/styled';
// import logoJpg from '../assets/img/logo.jpg';
import logoSvg from '../assets/img/logo.svg';
import logo2Jpg from '../assets/img/logo2.png';
import logo3Jpg from '../assets/img/logo3.png';
import { useTheme, useMediaQuery } from '@mui/material';

const PCFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 64px 100px 0 200px;
  .wrap {
    width: 25%;
    text-align: left;
    font-size: 20px;
    color: #ada4c9;
    div {
      margin-bottom: 32px;
    }
    .lin {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
    .to {
      font-size: 24px;
      color: #fff;
    }
  }
`;

const Divide = styled.div`
  height: 1px;
  background-color: #2a244c;
  margin: ${(props) => (props.matches ? '16px 0' : '44px 0')};
`;

const CopyRight = styled.div`
  color: #ada4c9;
  font-size: ${(props) => (props.matches ? '16px' : '20px')};
  margin-bottom: ${(props) => (props.matches ? '24px' : '44px')};
`;

const MobileFooter = styled.div`
  padding: 24px;
  .logo {
    text-align: left;
    margin-bottom: 20px;
  }
  .main {
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: left;
    .lin {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      font-size: 20px;
      img {
        margin-right: 10px;
      }
    }
    .fir {
      font-size: 16px;
      color: #ada4c9;
    }
    .sec {
      margin: 20px 0;
      font-size: 18px;
    }
    .thr {
      font-size: 18px;
      margin-bottom: 20px;
    }
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
`;

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#17172C',
        color: 'white',
        width: '100%',
        mt: matches ? '0' : '200px',
      }}
    >
      <div>
        {matches ? (
          <MobileFooter>
            <div className="logo">
              <img src={logoSvg} width={140} height={32} alt="logo" />
            </div>
            <div className="main">
              <div className="left">
                <div className="lin">
                  <img src={logo2Jpg} alt="logo2" />
                  <span>Discord</span>
                </div>
                <div className="fir">Support</div>
                <div className="sec">FAQ</div>
                <div className="thr">Submit a Ticket</div>
              </div>
              <div className="right">
                <div className="lin">
                  <img src={logo3Jpg} alt="logo3" />
                  <span>Twitter</span>
                </div>
                <div className="fir">About</div>
                <div className="sec">Docs</div>
                <div className="thr">Terms of Use</div>
              </div>
            </div>
          </MobileFooter>
        ) : (
          <PCFooter>
            <div className="wrap">
              <img src={logoSvg} width={140} height={32} alt="logo" />
            </div>
            <div className="wrap">
              <div className="to">About</div>
              <div>Docs</div>
              <div>Terms of use</div>
            </div>
            <div className="wrap">
              <div className="to">Support</div>
              <div>FAQs</div>
              <div>Submit a ticket</div>
            </div>
            <div className="wrap">
              <div className="to">Community</div>
              <div className="lin">
                <img src={logo2Jpg} alt="logo2" />
                Discord
              </div>
              <div className="lin">
                <img src={logo3Jpg} alt="logo3" />
                Twitter
              </div>
            </div>
          </PCFooter>
        )}

        <Divide className="divide" matches={matches}></Divide>
        <CopyRight matches={matches}>Copyright 2024 Rolldex</CopyRight>
      </div>
    </Box>
  );
};

export default Footer;
