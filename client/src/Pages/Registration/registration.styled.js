import styled from 'styled-components'

export const Wrapper = styled.div`
  .register-form-wrapper{
    max-width: 500px;
    height: fit-content;
    margin: 20px auto 0 auto;
    background: white;
    border: 1px solid #D5D8DC;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .logo-img{
      height: 50px;
    }
    .headine{
      margin: 15px 0;
      font-size: 14px;
    }
  }
  .register-form{
    width: 100%;
    .ant-form-item, .ant-btn{
      width: 100%;
    }
    .ant-form-item-control-input-content{
      display: flex;
      align-items: center;
      justify-content: center;
      button{
        width: fit-content;
        padding: 0;
      }
      .register-btn{
        width: 100%;
        height: 38px;
        background-color: #FF5733;
        color: white;
      }
    }
  }
`
