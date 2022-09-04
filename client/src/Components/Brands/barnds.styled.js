import styled from 'styled-components'

export const Layout = styled.div`
  max-width: 1200px;
  margin: 75px auto 175px auto;
  padding: 0 10px 10px 0;
  border: 2px solid #F5B7B1;
  border-radius: 15px;
  background-color: white;
  .layout-headline{
    margin: 20px 0 20px 30px;
    h1{
      font-size: 17px;
      color: #566573;
    }
  }
  .slick-list{
      width: 95%;
      margin: auto;
    }
  .slider-circle{
    width: 230px !important;
    .circle-hero{
      width: 230px !important;
      height: 230px !important;
      border-radius: 50%;
      border: 2px solid #F5B7B1;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 80%;
        height: 80%;
        object-fit: contain;
        margin: auto;
      }
    }
    .circle-description{
      width: fit-content;
      margin: 35px auto 0 auto;
      font-size: 20px;
    }
  }
`