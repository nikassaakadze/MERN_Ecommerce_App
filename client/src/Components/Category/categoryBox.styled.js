import styled from 'styled-components'

export const Block = styled.div`
  width: 100%;
  border: 1px solid #D5D8DC;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 7px 20px;
  /* height: fit-content;  */
  ul{
    display: flex;
    flex-direction: column;
    &:first-child{
      /* margin-top: 0; */
    }
    li{
      display: flex;
      align-items: center;
      margin: 10px 0;
      img{
        height: 20px;
      }
      b{
        margin-left: 6px;
        font-size: 13px;
        position: relative;
        top: 2px;
      }
    }
  }
`