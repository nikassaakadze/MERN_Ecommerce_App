import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.div`
  width: 29.34375vw;
  height: 90%;
  box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.75);
  border: 3px solid #F5B7B1;
  border-radius: 25px;
  .form-logo{
    width: 100px;
    margin: 20px auto;
    height:  5.859375vw;
    img{
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .form-headline{
    width: fit-content;
    margin: auto;
    font-size: 1.40625vw;
  }
  .form-fields{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    .input-field{
      display: flex;
      align-items: center;
      width: 100%;
      height: 35px;
      border: 3px solid #F5B7B1;
      border-radius: 10px;
      margin-top: 20px;
      background: #4D5656;
      input{
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 10px;
      padding-left: 10px;
      padding-right: 10px;
      outline: none;
      background: transparent;
      color: #999;
    }
    .field-icon{
      display: flex;
      justify-content: center;
      img{
        height: 20px;
        width: 20px;
        object-fit: contain;
        margin: auto;
      }
      border-right: 2px solid #CCD1D1;
      width: 50px;
    }
    }
    .sms-getter{
      position: relative;
      input{
        width: 50%;
        padding-right: 145px;
      }
      button{
        background: #F5B7B1;
        color: white;
        border: none;
        border-radius: 5px 0 0 5px;
        height: 36px;
        position: absolute;
        right: 0;
        width: 130px;
        color: #222;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
`