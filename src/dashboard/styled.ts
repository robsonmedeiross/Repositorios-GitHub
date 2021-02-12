import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface InputErro {
  hasError: boolean;
}

export const Header = styled.header`
    img {
      width: 90px;
    }
`;

export const Title = styled.h1`
    font-size: 40px;
    color: #3a3a3a;
    max-width: 550px;
    line-height: 56px;
    margin-top: 20px;
`;

export const Form = styled.form<InputErro>`
    margin-top: 140px;
    width: 100%;

    display: flex;
    justify-content: center;

    input {
        max-width: 550px;
        min-width: 400px;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        font-size: 22px;
        border: 2px solid #ffffff;

        ${(props) => props.hasError && css`
          border-color:  #c53030;
          border-right: 0;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background-color: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #ffffff;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Error = styled.span`
  width: 60%;
  display: flex;
  justify-content: center;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;

    div{
      display: flex;
      transition: .2s;

      & + div {
        margin-top: 18px;
      }

      &:hover {
          transform: scale(1.1);
        }

      a{
        background: #fff;
        border-radius: 5px;
        width: 90%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        }

        img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }

        section {
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
      }

      section.icons{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin: 0px ;

        svg {
            width: 25px;
            color: #3d3d4d;
            margin-right: 5px;


            &:hover {
              color: red;
              cursor: pointer;
            }
        }
        svg {
            width: 20px;
            height: 20px;
        }
      }
    }
`;
