import styled from 'styled-components'

export const Layout = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  background: white;
  border: 1px solid #D5D8DC;
  border-radius: 20px;
  padding-bottom: 20px;
  .layout-headline{
    margin: 20px 0 20px 30px;
    h1{
      font-size: 17px;
      color: #566573;
    }
  }
  .slider-wrapper{
    .slick-list{
      width: 95%;
      margin: auto;
    }
    margin: auto;
    height: 390px;
    .slick-arrow{
      display: none !important;
    }
    .slider-card{
      width: 255px !important;
      height: 390px;
      background-color: #EBEDEF;
      border-radius: 10px;
      .card-hero{
        width: 85%;
        margin: 10px auto 0 auto;
        border: 5px solid #fff;
        border-radius: 10px;
        img{
        width: 100%;
        height: 300px;
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