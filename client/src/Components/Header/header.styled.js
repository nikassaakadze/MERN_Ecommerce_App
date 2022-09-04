import styled from 'styled-components'

export const Layout = styled.div`
  border-bottom: 1.5px solid  #F5B7B1;
  background-color: white;
  @media only screen and (max-width: 400px){
    .sctivities{
      display: none;
    }
    .search{
      width: 80%;
    }
    .logo{
      width: 20%;
    }
  }
  .header-wrapper{
    max-width: 1100px;
    padding: 0 5px;
    margin: auto;
    display: flex;
    align-items:center;
    min-height: 16.5625vw;
  }
  .header-wrapper-authenticated{
    max-width: 1100px;
    padding: 0 5px;
    margin: auto;
    display: flex;
    align-items:center;
    min-height: 5.5625vw;
    .logo{
      justify-content: flex-start ;
      width: 20%;
      margin-right: 55px;
      img{
        height: 44px;
      }
    }   
    .sctivities{
      width: 40%;
    }
  }
  
`

export const HeaderWrapper = styled.div`

`

export const Search = styled.div`
  width: 40%;
  /* background-color: red; */
  .search-bar{
    position: relative;
    background-color: #F5B7B1 ;
    height: 4.296875vw;
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.78125vw;
    .search-inner{
      width: 96%;
      height: 3.125vw;
      background: #fff;
      display: flex;
      align-items: center;
      border-radius: 0.546875vw;
      box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.75);
      input{
        flex: 1;
        outline: none;
        border: none;
        height: 3.125vw;
        padding: 0vw  1.25vw;
        font-family: "BPG Arial Caps", sans-serif;
        border-radius: 7px;
        font-size: 1.015625vw;
      }
      .search-icon{
        padding: 0 15px;
        display: flex;
        align-items: center;
        border-left: 1px solid #3f3f3f;
        cursor: pointer;
        height: 2.34375vw;
        .searchIcon{
          height: 1.5625vw;
      }
    }
    }
  }
`

export const LogoArea = styled.div`
  width: 40%;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.296875vw;
  .logo{
    height:  4.6875vw;
  }
`

export const Activities = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background: brown; */
  height: 4.296875vw;
  .newItem-btn{
    margin-right: 25px;
    padding: 5px 10px;
    background: #3498DB;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
    h6{
      color: white !important;
      font-size: 11px;
      margin-left: 5px;
      padding-top: 2px;
    }
  }
  .room-block{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 5px;
    .my-room{
      color: blue
    }
    h5{
      width: fit-content;
      margin: 0;
    }
  }
  .favors{
    margin: 0 25px;
  }
  img{
    height: 2.34375vw;
  }
  .auth-btn{
    width: 14.453125vw;
    height: 3.90625vw;
    background-color: #F5B7B1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1vw;
    border-radius: 7px;
    box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.75);
  }

`
export const NewItemBlock = styled.div`
    width: 100%;
    margin-left: 50px;
`

