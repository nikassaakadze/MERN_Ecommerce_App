import styled from 'styled-components'

export const Layout = styled.div`
  border-bottom: 1px solid  #D5D8DC;
  background-color: white;
  @media only screen and (max-width: 400px){
    .sctivities{
      display: none;
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
    height: 100px;
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
  .logo{
    img{
      height: 40px;
    }
  }
  .user{
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: flex-end;
  }
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
      color: blue;
      line-height: 1;
    }
    h5{
      margin: 0;
      font-size: 13px;
    }
    h5{
      margin: 0;
      font-size: 12px;
    }
  }
  .auth-btn{
    width: 150px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1vw;
    border-radius: 7px;
  }
`

export const Search = styled.div`
  flex: 1;
  margin: 0 20px;
  .search-bar{
    position: relative;
    height: 4.296875vw;
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.78125vw;
    .search-inner{
      width: 96%;
      background: #fff;
      display: flex;
      align-items: center;
      border-radius: 0.546875vw;
      border: 1px solid #D5D8DC;
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
        border-left: 1px solid #D5D8DC;
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
  display: flex;
  align-items: center;
  height: 4.296875vw;
`

export const Activities = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;  
  height: 4.296875vw;
  margin-right: 20px;
  .favors{
    margin: 0 25px;
  }
  .anticon{
    font-size: 27px;
    color: #F39C12;
  }

`
export const NewItemBlock = styled.div`
    width: 100%;
    margin-left: 50px;
`

