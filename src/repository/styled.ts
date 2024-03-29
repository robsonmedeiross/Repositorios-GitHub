import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
      width: 90px;
    }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #a8a8b3;
    text-decoration: none;
    transition: .2s;

    &:hover{
      color: #666;
    }
  }
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 550px;
    line-height: 56px;
    margin-top: 40px;
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {

     & + li {
       margin-left: 80px;
       @media (max-width:425px) {
        margin-left: 0px;
       }
     }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
    @media (max-width: 425px){
    flex-direction: column;
    gap: 20px;
  }
  }
`;

export const Issues = styled.div`
    margin-top: 80px;

    a{
        background: #fff;
        border-radius: 5px;
        width: 100%auto;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: .2s;

        & + a {
            margin-top: 14px;
        }

        &:hover {
            transform: translateX(50px);
        }

      div {
          margin: 0 16px;
          flex: 1;

          strong {
              font-size: 20px;
              color: #3d3d4d;
          }

          p {
              font-size: 18px;
              color: #a8a8b3;
              margin-top: 4px;
          }
      }
      svg {
          margin-left: auto;
      }
    }
`;
