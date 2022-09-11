import styled from 'styled-components'

export const Grid = styled.div`
  border: 1px solid #D5D8DC;
  border-radius: 15px;
  flex: 1;
  margin-left: 35px;
  padding:0 45px 20px 45px;
  height: fit-content;
  .layout-headline{
    margin: 20px 0;
    h1{
      font-size: 17px;
      color: #566573;
    }
  }
  .slider-wrapper{
    width: 700px;
    /* height: 390px; */
    .slick-arrow{
      display: none !important;
    }
    .slider-card{
      width: 220px !important;
      height: 350px;
      background-color: #EBEDEF;
      border-radius: 10px;
      .card-hero{
        width: 85%;
        margin: 10px auto 0 auto;
        border: 5px solid #fff;
        border-radius: 10px;
        img{
        width: 100%;
        height: 260px;
        object-fit: cover;
        border-radius: 10px;
      }
      }
      .card-description{
        width: 88%;
        margin: 15px auto 0 auto;
        h5{
          font-weight: lighter;
          color: #1C2833;
        }
        h4{
          padding-top: 5px;
          color: #3498DB;
        }
      }
    }
    }
`