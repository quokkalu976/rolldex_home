import { useState, useEffect } from 'react';
// import topBg from '../../assets/img/topBg.svg';
import arrow from '../../assets/img/arrow.png';
import self from '../../assets/img/self.png';
import swapgrid from '../../assets/img/swapgrid.png';
import brige from '../../assets/img/brige.png';
import rollBg from '../../assets/img/RollBg.png';
import swaps from '../../assets/img/swaps.png';
import perpetual from '../../assets/img/perpetual.png';
import start from '../../assets/img/start.png';
import intruduce from '../../assets/img/intruduce.png';
import rollbgMobile from '../../assets/img/rollbgMobile.png';
import prediction from '../../assets/img/prediction.png';
import styled from '@emotion/styled';
import { useTheme, useMediaQuery } from '@mui/material';
import { tokenList } from './constant.js';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const Main = styled.div`
  margin: ${(props) => (props.matches ? '40px' : '0 auto')};
  /* width: 100%; */
  max-width: 1200px;
  /* margin: 0 auto; */
`;
const TabItem = styled.div`
  position: relative;
  border-radius: 20px;
  z-index: ${(props) => (props.tabIndex === props.currIndex ? '1000' : '1')};
  padding: 1px;
  width: 50%;
  /* width: ${(props) =>
    props.tabIndex === props.currIndex ? '60%' : '40%'}; */
  background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
  transform: ${(props) =>
    props.tabIndex === props.currIndex
      ? ''
      : `scale(.8) translateX(${props.currIndex === 1 ? '80px' : '-80px'})`};
  opacity: ${(props) => (props.tabIndex === props.currIndex ? '1' : '.5')};
  box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
  .in {
    background: linear-gradient(152deg, #282042 0%, #24194a 100%);
    height: 100%;
    border-radius: 20px;
    padding: 44px;
    .top {
      padding: 1px;
      border-radius: 12px;
      background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
      box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
      .inner {
        border-radius: 12px;
        padding: 32px;
        background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
        .percent {
          font-size: 50px;
        }
        .text {
          font-size: 20px;
        }
      }
    }
    .bot {
      margin-top: 44px;
      padding: 1px;
      border-radius: 12px;
      background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
      box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
      .inner {
        border-radius: 12px;
        padding: 32px;
        background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
        .percent {
          font-size: 50px;
        }
        .text {
          font-size: 20px;
        }
      }
    }
  }
`;
const MobileTabItem = styled.div`
  position: relative;
  border-radius: 20px;
  z-index: ${(props) => (props.tabIndex === props.currIndex ? '1000' : '1')};
  padding: 1px;
  width: 100%;
  /* width: ${(props) =>
    props.tabIndex === props.currIndex ? '60%' : '40%'}; */
  background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
  display: ${(props) =>
    props.tabIndex === props.currIndex ? 'block' : 'none'};
  /* transform: ${(props) =>
    props.tabIndex === props.currIndex
      ? ''
      : `scale(.8) translateX(${props.currIndex === 1 ? '80px' : '-80px'})`}; */
  /* opacity: ${(props) =>
    props.tabIndex === props.currIndex ? '1' : '.5'}; */
  box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
  .in {
    background: linear-gradient(152deg, #282042 0%, #24194a 100%);
    height: 100%;
    border-radius: 20px;
    padding: 20px;
    .top {
      padding: 1px;
      border-radius: 12px;
      background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
      box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
      .inner {
        border-radius: 12px;
        padding: 32px;
        background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
        .percent {
          font-size: 36px;
        }
        .text {
          font-size: 16px;
        }
      }
    }
    .bot {
      margin-top: 20px;
      padding: 1px;
      border-radius: 12px;
      background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
      box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
      .inner {
        border-radius: 12px;
        padding: 32px;
        background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
        .percent {
          font-size: 36px;
        }
        .text {
          font-size: 16px;
        }
      }
    }
  }
`;

const TabBody = styled.div`
  width: ${(props) => (props.matches ? '100%' : '800px')};
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TabMobileBody = styled.div`
  width: ${(props) => (props.matches ? '100%' : '800px')};
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TabHead = styled.div`
  display: flex;
  /* margin-top: 64px; */
  justify-content: center;
  border-radius: 48px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: linear-gradient(290deg, #2f1b5a 2.18%, #3a2659 92.61%);
  padding: 4px;
  font-size: ${(props) => (props.matches ? '18px' : '24px')};
  box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
  width: ${(props) => (props.matches ? '100%' : '800px')};
  margin: 40px auto;
  align-items: center;
  .common_btn {
    text-align: center;
    width: 50%;
    cursor: pointer;
  }
  .actived {
    border-radius: 40px;
    padding: 4px;
    background: linear-gradient(290deg, #28235f 2.18%, #623b9a 92.61%);
  }
`;

const RowBet = styled.div`
  margin-top: ${(props) => (props.matches ? '100px' : '200px')};
  font-size: ${(props) => (props.matches ? '36px' : '50px')};
  text-align: ${(props) => (props.matches ? 'left' : 'center')};
  .white {
    color: #fff;
    font-weight: 700;
  }
  .switch {
    font-size: ${(props) => (props.matches ? '16px' : '20px')};
  }
`;

const BtnWrap = styled.div`
  margin-top: 32px;
  border-radius: 120px;
  background: linear-gradient(290deg, #48a0f6 2.18%, #74fa9a 92.61%);
  box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
  width: ${(props) => (props.matches ? '100%' : '240px')};
  padding: 16px 40px;
  padding: ${(props) => (props.matches ? '10px 40px' : '16px 40px')};
  color: #24123e;
  font-size: ${(props) => (props.matches ? '18px' : '24px')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const TabBtn = styled.div`
  margin-top: 32px;
  border-radius: 120px;
  background: linear-gradient(290deg, #48a0f6 2.18%, #74fa9a 92.61%);
  box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
  width: 100%;
  padding: 16px 40px;
  padding: ${(props) => (props.matches ? '10px 40px' : '16px 40px')};
  color: #24123e;
  font-size: ${(props) => (props.matches ? '18px' : '24px')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeWrap = styled.div`
  /* position: relative; */
  .pcBg {
    position: absolute;
    top: 0;
    right: 0;
    width: 640px;
    height: 680px;
  }
  .rollbg {
    position: absolute;
    top: 1300px;
    left: 20px;
    z-index: -1;
  }
  .rollbgMobile {
    position: absolute;
    top: 1560px;
    right: 0;
    z-index: -1;
    width: 118px;
    height: 236px;
  }
`;

const TitleWrap = styled.div`
  text-align: left;
  font-size: ${(props) => (props.matches ? '36px' : '50px')};
  margin-top: ${(props) => (props.matches ? '-90px' : '300px')};
  .white {
    color: #fff;
  }
`;

const UltraList = styled.div`
  margin-top: 20px;
  display: flex;
  /* width: 100%; */
  flex-direction: ${(props) => (props.matches ? 'column' : 'row')};
  align-items: flex-start;
  div {
    position: relative;
    padding-left: ${(props) => (props.matches ? '30px' : '30px')};
  }
  div:before {
    content: '';
    height: 4px;
    width: 4px;
    background-color: #ada4c9;
    text-align: left;
    position: absolute;
    top: 10px;
    left: 10px;
  }
`;

const Roll = styled.div`
  margin: ${(props) => (props.matches ? '100px 0 40px' : '200px 0 64px')};
  font-size: ${(props) => (props.matches ? '36px' : '50px')};
  text-align: ${(props) => (props.matches ? 'left' : 'center')};
  .white {
    color: #fff;
    font-weight: 700;
  }
`;

const RollList = styled.div`
  display: flex;
  justify-content: space-around;
  /* max-width: 1200px; */
  flex-direction: ${(props) => (props.matches ? 'column' : 'row')};
`;
const Intruduce = styled.div`
  margin: ${(props) => (props.matches ? '20px 0 100px' : '64px 0 200px')};
`;
const Trade = styled.div`
  margin-bottom: 64px;
  font-size: ${(props) => (props.matches ? '36px' : '50px')};
  text-align: ${(props) => (props.matches ? 'left' : 'center')};
  .title {
  }
  .desc {
    color: #fff;
  }
`;

const TokenWrap = styled.div`
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before {
    content: '';
    height: ${(props) => (props.matches ? '0' : '400px')};
    width: 200px;
    position: absolute;
    top: ${(props) => (props.matches ? '3000px' : '3050px')};
    left: 0;
    background: linear-gradient(270deg, rgba(39, 22, 64, 0) 0 0%, #271640 100%);
    z-index: 1000;
  }
  &::after {
    content: '';
    height: ${(props) => (props.matches ? '300px' : '400px')};
    width: 200px;
    position: absolute;
    top: ${(props) => (props.matches ? '3200px' : '3050px')};
    right: 0;
    background: linear-gradient(270deg, #271640 0 0%, rgba(39, 22, 64, 0) 100%);
    z-index: 1000;
  }
`;
const TokenList = styled.div`
  /* position: relative; */
  /* height: 375px; */
  width: 2500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow-x: scroll; */
  /* &::before {
    content: '';
    height: 100%;
    width: 200px;
    background-color: #f50;
    position: absolute;
    top: 0;
    left: 0;
  } */
`;

const TokenItem = styled.div`
  background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
  border-radius: 188px;
  padding: 1px;
  margin: ${(props) => (props.matches ? '10px 4px' : '20px 10px')};
  &:nth-child(1) {
    margin-left: 100px;
  }
  &:nth-child(18) {
    margin-left: ${(props) => (props.matches ? '' : '100px')};
  }
  &:last-child {
    margin-right: ${(props) => (props.matches ? '100px' : '100px')};
  }
  /* position: absolute; */
  .in {
    display: flex;
    align-items: center;
    border-radius: 188px;
    border: 1px solid rgba(17, 5, 33, 0);
    padding: ${(props) => (props.matches ? '4px 10px' : '12px 24px')};
    /* width: 320px; */

    background: linear-gradient(152deg, #282042 0%, #24194a 100%);
    box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
  }
  img {
    margin-right: 10px;
  }
  .r {
    text-align: left;
  }
  .top {
    margin-bottom: 4px;
  }
  .name {
    color: #fff;
    margin-right: 10px;
    font-size: ${(props) => (props.matches ? '18px' : '24px')};
  }
  .percent {
    color: #70d8c5;
    margin-left: 10px;
  }
`;

const RollItem = styled.div`
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
  box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
  width: ${(props) => (props.matches ? '100%' : '360px')};
  margin-bottom: 20px;
  .in {
    background: linear-gradient(152deg, #282042 0%, #24194a 100%);
    height: 100%;
    border-radius: 20px;
    padding: ${(props) => (props.matches ? '24px' : '44px')};
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    /* justify-content: ${(props) => (props.matches ? 'flex-start' : 'center')}; */
    flex-direction: column;
    align-items: ${(props) => (props.matches ? 'start' : 'center')};
    font-size: 20px;
    text-align: ${(props) => (props.matches ? 'left' : 'center')};
    .text {
      /* font-size: 20px; */
      margin-bottom: 10px;
      color: #fff;
      font-size: ${(props) => (props.matches ? '18px' : '24px')};
    }
    .top {
      padding: 1px;
      border-radius: 12px;
      box-sizing: border-box;
      height: ${(props) => (props.matches ? '80px' : '96px')};
      width: ${(props) => (props.matches ? '80px' : '96px')};
      margin-bottom: 44px;
      background: linear-gradient(290deg, #110521 2.18%, #38ba93 92.61%);
      box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
      .inner {
        border-radius: 12px;
        height: ${(props) => (props.matches ? '80px' : '96px')};
        width: ${(props) => (props.matches ? '80px' : '96px')};
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
      }
    }
    .percent {
      font-size: ${(props) => (props.matches ? '16px' : '24px')};
    }
  }
`;

const BotWrap = styled.div`
  overflow: hidden;
  margin: ${(props) => (props.matches ? '0' : '0 auto')};
  padding: ${(props) => (props.matches ? '100px 20px' : '')};
  /* width: 100%; */
  max-width: 1200px;
  font-size: ${(props) => (props.matches ? '36px' : '50px')};
  text-align: ${(props) => (props.matches ? 'left' : 'center')};
  /* margin: 0 auto; */
  .rol {
    margin-top: ${(props) => (props.matches ? '100px' : '200px')};
  }
  .bit {
    color: #fff;
    margin-bottom: 40px;
  }
`;
const PCSwapGrid = styled.div`
  margin: ${(props) => (props.matches ? '10px' : '10px')};
  position: relative;
  .tl {
    border-radius: 20px;
    padding: 32px 40px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: absolute;
    /* max-width: 368px; */

    left: 0;
    top: 120px;
    .con {
      text-align: right;
      .title {
        color: #fff;
        font-size: 24px;
      }
      .desc {
        max-width: 300px;
        font-size: 20px;
      }
    }
    .ico {
      position: absolute;
      bottom: -80px;
      right: -100px;
    }
  }
  .tr {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 32px 40px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: absolute;
    right: 0;
    top: 91px;
    .con {
      text-align: left;
      .title {
        color: #fff;
        font-size: 24px;
      }
      .desc {
        max-width: 300px;
        font-size: 20px;
      }
    }
    .ico {
      position: absolute;
      bottom: -80px;
      left: -100px;
    }
  }
  .bl {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 32px 40px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    .con {
      text-align: right;
      .title {
        color: #fff;
        font-size: 24px;
      }
      .desc {
        max-width: 300px;
        font-size: 20px;
      }
    }
    .ico {
      position: absolute;
      top: -80px;
      right: -100px;
    }
  }
  .br {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 32px 40px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: absolute;
    bottom: 29px;
    right: 0;
    .con {
      text-align: right;
      .title {
        color: #fff;
        font-size: 24px;
      }
      .desc {
        max-width: 300px;
        font-size: 20px;
      }
    }
    .ico {
      position: absolute;
      top: -80px;
      left: -100px;
    }
  }
`;
const MibileSwapGrid = styled.div`
  margin: 50px 0;
  position: relative;
  /* overflow: hidden; */
  .rolBg {
    position: absolute;
    right: -150px;
    top: -200px;
    z-index: -1;
  }
  /* div {
    margin-bottom: 24px;
  } */
  .tl {
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: relative;
    margin-bottom: 60px;
    /* max-width: 368px; */

    /* left: 0;
    top: 120px; */
    .con {
      text-align: left;
      .title {
        color: #fff;
        font-size: 18px;
        margin-bottom: 12px;
      }
      .desc {
        /* max-width: 300px; */
        font-size: 16px;
      }
    }
    .ico {
      position: absolute;
      top: -40px;
      right: 0;
      width: 80px;
      height: 80px;
    }
  }
  .tr {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: relative;
    margin-bottom: 60px;
    /* right: 0;
    top: 120px; */
    .con {
      text-align: right;
      .title {
        color: #fff;
        font-size: 18px;
        margin-bottom: 12px;
      }
      .desc {
        /* max-width: 300px; */
        font-size: 16px;
      }
    }
    .ico {
      position: absolute;
      top: -40px;
      left: 0;
      width: 80px;
      height: 80px;
    }
  }
  .bl {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: relative;
    margin-bottom: 60px;
    /* bottom: 0;
    left: 0; */
    .con {
      text-align: left;
      .title {
        color: #fff;
        font-size: 18px;
        margin-bottom: 12px;
      }
      .desc {
        /* max-width: 300px; */
        font-size: 16px;
      }
    }
    .ico {
      position: absolute;
      top: -40px;
      right: 0;
      width: 80px;
      height: 80px;
    }
  }
  .br {
    /* max-width: 368px; */
    border-radius: 20px;
    padding: 24px;
    background: linear-gradient(152deg, #2a244c 0%, #322557 100%);
    box-shadow: 4px 8px 24px 0px rgba(20, 6, 38, 0.3);
    position: relative;
    margin-bottom: 60px;
    /* bottom: 0;
    right: 0; */
    .con {
      text-align: right;
      .title {
        color: #fff;
        font-size: 18px;
        margin-bottom: 12px;
      }
      .desc {
        /* max-width: 300px; */
        font-size: 16px;
      }
    }
    .ico {
      position: absolute;
      top: -40px;
      left: 0;
      width: 80px;
      height: 80px;
    }
  }
`;
const Start = styled.div`
  overflow: ${(props) => (props.matches ? 'hidden' : '')};
  margin-top: ${(props) => (props.matches ? '100px' : '200px')};
  border-radius: 32px;
  padding: ${(props) => (props.matches ? '168px 24px 40px' : '64px')};
  background: linear-gradient(152deg, #282042 0%, #24194a 100%);
  box-shadow: 3.147px 6.293px 18.88px 0px rgba(20, 6, 38, 0.3);
  text-align: left;
  position: relative;
  .top {
    font-size: ${(props) => (props.matches ? '36px' : '50px')};
    max-width: ${(props) => (props.matches ? '' : '80%')};
    font-weight: 400;
  }
  .ti {
    font-size: ${(props) => (props.matches ? '16px' : '20px')};
  }
  .startImg {
    width: ${(props) => (props.matches ? '260px' : '')};
    height: ${(props) => (props.matches ? '260px' : '')};
    position: absolute;
    top: ${(props) => (props.matches ? '-120px' : '')};
    right: ${(props) => (props.matches ? '-20px' : '0')};
    bottom: ${(props) => (props.matches ? '' : '0')};
  }
`;

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [tabIndex, setTabIndex] = useState(1);
  const handleTab = (type) => {
    setTabIndex(type);
  };

  useEffect(() => {
    let tokenWrap = document.getElementById('tokenWrap');
    let tokenContainer = document
      .getElementById('tokenContainer')
      ?.getBoundingClientRect();
    tokenWrap.scrollTo({
      left: tokenContainer.width / 4,
      behavior: 'smooth',
    });
  }, []);

  return (
    <HomeWrap className="home" matches={matches}>
      {matches ? (
        <DotLottiePlayer
          src="https://lottie.host/9edd0651-8e6b-4e9d-9127-ee1d195c4e11/ClazRgbnqR.json"
          autoplay
          loop
          style={{
            width: '100%',
            height: '380px'
          }}
        />
        // <img src={topBg} width={'100%'} height={380} alt="bg" />
      ) : (
        <DotLottiePlayer
          src="https://lottie.host/9edd0651-8e6b-4e9d-9127-ee1d195c4e11/ClazRgbnqR.json"
          autoplay
          loop
          className='pcBg'
        />
        // <img className="pcBg" src={topBg} alt="bg" />
      )}

      <Main matches={matches} className="main">
        <TitleWrap matches={matches}>
          <span>Embark on the </span>
          <span className="white">
            BTC Native Decentralized Derivatives Trading
          </span>
          <span> Journey</span>
        </TitleWrap>
        <UltraList matches={matches}>
          <div>Ultra-high leverage</div>
          <div>No slippage</div>
          <div>Support for BTC-Native Assets</div>
        </UltraList>
        <a href='https://app.rolldex.io' target='_blank' rel="noreferrer">
          <BtnWrap matches={matches}>
            <span>Trade Now</span>
            <img src={arrow} alt="arrow" />
          </BtnWrap>
        </a>
        <RowBet matches={matches}>
          <span>Roll between </span>
          <span className="white">2 trading modes</span>
          <div className="switch">
            Switch seamlessly between Classic and Pro Mode with one-click
          </div>
        </RowBet>
        <div className="tab">
          <TabHead matches={matches}>
            <div
              className={`common_btn ${tabIndex === 1 ? 'actived' : ''}`}
              onClick={() => handleTab(1)}
            >
              Classic Mode
            </div>
            <div
              className={`common_btn ${tabIndex === 2 ? 'actived' : ''}`}
              onClick={() => handleTab(2)}
            >
              Pro Mode
            </div>
          </TabHead>
          {!matches ? (
            <TabBody matches={matches} tabIndex={tabIndex}>
              <TabItem matches={matches} tabIndex={tabIndex} currIndex={1}>
                <div className="in">
                  <div className="top">
                    <div className="inner">
                      <div className="percent">500x</div>
                      <div className="text">Upto 500x leverage</div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="inner">
                      <div className="percent">0</div>
                      <div className="text">Zero Slippage</div>
                    </div>
                  </div>
                  {tabIndex === 1 && (
                    <a href="https://app.rolldex.io" target='_blank' rel="noreferrer">
                      <TabBtn>
                        <span>Trade Now</span>
                        <img src={arrow} alt="arrow" />
                      </TabBtn>
                    </a>
                  )}
                </div>
              </TabItem>
              <TabItem matches={matches} tabIndex={tabIndex} currIndex={2}>
                <div className="in">
                  <div className="top">
                    <div className="inner">
                      <div className="percent">500x</div>
                      <div className="text">Upto 500x leverage</div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="inner">
                      <div className="percent">0</div>
                      <div className="text">Zero Slippage</div>
                    </div>
                  </div>
                  {tabIndex === 2 && (
                     <a href="https://app.rolldex.io" target='_blank' rel="noreferrer">
                      <TabBtn>
                        <span>Trade Now</span>
                        <img src={arrow} alt="arrow" />
                      </TabBtn>
                    </a>
                  )}
                </div>
              </TabItem>
            </TabBody>
          ) : (
            <TabMobileBody matches={matches} tabIndex={tabIndex}>
              <MobileTabItem
                matches={matches}
                tabIndex={tabIndex}
                currIndex={1}
              >
                <div className="in">
                  <div className="top">
                    <div className="inner">
                      <div className="percent">500x</div>
                      <div className="text">Upto 500x leverage</div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="inner">
                      <div className="percent">0</div>
                      <div className="text">Zero Slippage</div>
                    </div>
                  </div>
                  <TabBtn matches={matches}>
                    <span>Trade Now</span>
                    <img src={arrow} alt="arrow" />
                  </TabBtn>
                </div>
              </MobileTabItem>
              <MobileTabItem
                matches={matches}
                tabIndex={tabIndex}
                currIndex={2}
              >
                <div className="in">
                  <div className="top">
                    <div className="inner">
                      <div className="percent">500x</div>
                      <div className="text">Upto 500x leverage</div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="inner">
                      <div className="percent">0</div>
                      <div className="text">Zero Slippage</div>
                    </div>
                  </div>
                  <TabBtn matches={matches}>
                    <span>Trade Now</span>
                    <img src={arrow} alt="arrow" />
                  </TabBtn>
                </div>
              </MobileTabItem>
            </TabMobileBody>
          )}
        </div>
        <Roll matches={matches}>
          <div>Rolling out extraordinary</div>
          <div className="white">Opportunities for Traders and Stakers</div>
        </Roll>
        <RollList matches={matches}>
          <RollItem matches={matches}>
            <div className="in">
              <div className="top">
                <div className="inner">
                  <div className="percent">
                    <img src={self} alt="self" />
                  </div>
                  <div className="text"></div>
                </div>
              </div>
              <div className="text">Self Custody</div>
              <div className="percent">
                Retain full control over your funds with our non-custodial
                platform - no manual deposit or withdrawal processes required.
              </div>
            </div>
          </RollItem>
          <RollItem matches={matches}>
            <div className="in">
              <div className="top">
                <div className="inner">
                  <div className="percent">
                    <img src={self} alt="self" />
                  </div>
                  <div className="text"></div>
                </div>
              </div>
              <div className="text">Optimized Capital Allocation</div>
              <div className="percent">
                Maximize capital efficiency with shared liquidity across trading
                pairs via the RLP pool, enabling larger positions.
              </div>
            </div>
          </RollItem>
          <RollItem matches={matches}>
            <div className="in">
              <div className="top">
                <div className="inner">
                  <div className="percent">
                    <img src={self} alt="self" />
                  </div>
                </div>
              </div>
              <div className="text">BTC-Native Asset Support</div>
              <div className="percent">
                Trade with BTC-native assets as collateral or stake them to
                directly earn BTC.
              </div>
            </div>
          </RollItem>
        </RollList>
        <Intruduce matches={matches}>
          <div>
            <img
              src={intruduce}
              width={matches ? 40 : 56}
              height={matches ? 40 : 56}
              alt="intruduce"
            />
          </div>
          <div
            style={{
              fontSize: matches ? '16px' : '20px',
            }}
          >
            Introducing a Points System and more!
          </div>
        </Intruduce>
        <Trade matches={matches}>
          <div className="title">Trade all the</div>
          <div className="desc">Popular tokens</div>
        </Trade>
      </Main>
      <TokenWrap id="tokenWrap" matches={matches}>
        <TokenList id="tokenContainer" matches={matches}>
          {tokenList.map((v) => {
            return (
              <TokenItem className="tokenItem" matches={matches}>
                <div className="in">
                  <div>
                    <img src={v.img} width={matches ? 40 : 56} alt={v.name} />
                  </div>
                  <div className="r">
                    <div className="top">
                      <span className="name">{v.name}</span>
                      <span>{v.desc}</span>
                    </div>
                    <div className="bot">
                      <span>{v.count}</span>
                      <span className="percent">{v.percent}</span>
                    </div>
                  </div>
                </div>
              </TokenItem>
            );
          })}
        </TokenList>
      </TokenWrap>
      <BotWrap matches={matches}>
        <div className="rol">Roll into the future of the</div>
        <div className="bit">Bitcoin ecosystem</div>
        {matches ? (
          <MibileSwapGrid>
            <img
              className="rolBg"
              src={swapgrid}
              width={312}
              height={312}
              alt="swapgrid"
            />
            <div className="tl">
              <div className="con">
                <div className="title">Swaps</div>
                <div className="desc">Swap quickly, cheaply and smoothly</div>
              </div>
              <img className="ico" src={swaps} alt="swaps" />
            </div>
            <div className="tr">
              <div className="con">
                <div className="title">Bridge</div>
                <div className="desc">
                  Facilitating cross-chain transfer and asset interoperability
                </div>
              </div>
              <img className="ico" src={brige} alt="brige" />
            </div>
            <div className="bl">
              <div className="con">
                <div className="title">Perpetual</div>
                <div className="desc">
                  Trade BTC-native assets with up to 500x leverage
                </div>
              </div>
              <img className="ico" src={perpetual} alt="perpetual" />
            </div>
            <div className="br">
              <div className="con">
                <div className="title">Prediction</div>
                <div className="desc">Simple bets on price movements</div>
              </div>
              <img className="ico" src={prediction} alt="prediction" />
            </div>
          </MibileSwapGrid>
        ) : (
          <PCSwapGrid>
            <img src={swapgrid} width={866} height={866} alt="swapgrid" />
            <div className="tl">
              <div className="con">
                <div className="title">Swaps</div>
                <div className="desc">Swap quickly, cheaply and smoothly</div>
              </div>
              <img className="ico" src={swaps} alt="swaps" />
            </div>
            <div className="tr">
              <div className="con">
                <div className="title">Perpetual</div>
                <div className="desc">
                  Trade BTC-native assets with up to 500x leverage
                </div>
              </div>
              <img className="ico" src={perpetual} alt="perpetual" />
            </div>
            <div className="bl">
              <div className="con">
                <div className="title">Bridge</div>
                <div className="desc">
                  Facilitating cross-chain transfer and asset interoperability
                </div>
              </div>
              <img className="ico" src={brige} alt="brige" />
            </div>
            <div className="br">
              <div className="con">
                <div className="title">Prediction</div>
                <div className="desc">Simple bets on price movements</div>
              </div>
              <img className="ico" src={prediction} alt="prediction" />
            </div>
          </PCSwapGrid>
        )}
        <Start matches={matches}>
          <div className="top">
            Start Trading Bitcoin Native Assets with Rolldex
          </div>
          <div className="ti">
            Upto 1000x leverage, low fees, and minimal slippage
          </div>
          <a href='https://app.rolldex.io' target='_blank' rel="noreferrer">
            <BtnWrap matches={matches}>
              <span>Trade Now</span>
              <img src={arrow} alt="arrow" />
            </BtnWrap>
          </a>
          <img className="startImg" src={start} alt="start" />
        </Start>
      </BotWrap>
      {matches ? (
        <img className="rollbgMobile" src={rollbgMobile} alt="rollbgMobile" />
      ) : (
        <img className="rollbg" src={rollBg} alt="rollBg" />
      )}
    </HomeWrap>
  );
};

export default Home;
