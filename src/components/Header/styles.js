import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;

  background: red;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  border: 1px solid #dddddd;

  nav {
    display: flex;
    align-items: center;
    padding: 20px;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    width: 150px;
    margin-right: 30px;

    span {
      font-size: 14px;
      color: #666666;
      font-weight: 700;
    }

    span:nth-last-of-type(1) {
      color: #de3b3b;
      font-weight: 400;
      margin-top: 10px;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
  }
`;

export const MenuItem = styled(Link)`
  font-size: 15px;
  color: #999999;
  font-weight: 700;

  :hover {
    color: #444444;
    transition-delay: 100ms;
  }
`;
