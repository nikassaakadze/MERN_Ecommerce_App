import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: ceenter;
  max-width: 1100px;
  margin: 0px auto 0 auto;
  padding: 0 10px;
  .new-item-fields{
    margin-left: 20px;
    width: 50%;
    .item-add-btn{
      width: 100%;
      border-radius: 15px;
      border: 2px solid #F5B7B1;
      margin-top: 20px;
      margin-bottom: 20px;
      height: 40px;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector{
      border-radius: 8px;
    }
    .ant-select{
      border-radius: 20px !important;
    }
    .ant-form-item{
      /* margin-bottom: 0; */
    }
    fieldset{
      padding: 20px;
      width: 100%;
      border: 2px solid #F5B7B1;
      border-radius: 15px;
      background-color: white;
      margin-top: 20px;
      label{
          font-size: 12px;
          color: #808B96;
          &::before{
            display: none !important;
          }
        }
      input, textarea{
          border-radius: 8px;
          border: 1px solid #D5D8DC;
          outline: none;
          height: 30px;
          padding: 0 10px;
        }
        textarea{
          min-height: 100px;
          max-height: 200px;
          max-width: 600px;
          min-width: 200px;
          padding-top: 10px;
        }
        .name-number{
          display: flex;
          align-items: center;
          justify-content: space-between;
          input{
            width: 100%;
          }
        }
      li{
        display: flex;
        flex-direction: column;
        margin-top: 15px;
      }
      .image-upload{
        width: 100%;
        height: 150px;
        border: 1px dotted;
        margin: auto;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .image-list{
          .img-card{
            width: 60px;
            height: 80px;
            border: 1px solid #999;
            img{
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      }
      /* .fields-group{ */
    /* } */
    }
    h1{
      font-size: 15px !important;
    }
  }
`

export const ItemsNavigation = styled.div`
  width: 25%;
  border: 2px solid #F5B7B1;
  border-radius: 15px;
  height: fit-content;
  margin-top: 20px;
  background-color: white;
  ul{
    padding: 20px;
    &:first-child{
      margin-top: 0 ;
    }
    li{
      margin-top: 12px;
      font-size: 14px;
      display: flex;
      align-items: center;
      .MuiSvgIcon-root{
        font-size: 17px;
      }
      span{
        margin-left: 4px;
      }
    }
  }
`