import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 80px;
  margin-top: 20px;
  overflow: ${({ showScrollbar }) => (showScrollbar ? 'visible' : 'hidden')};
`;

export const Table = styled.table`
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: #666666;
  font-weight: 400;
  border-collapse: separate;
  border-spacing: 0 25px;

  th {
    text-align: left;
    font-size: 16px;
    color: #444444;
    font-weight: 700;
    height: 40px;
    border-radius: 5px;
  }

  tr {
    margin-bottom: 20px;
    border-radius: 5px;
  }

  td {
    background-color: #fff;
    height: 60px;
    border-radius: 5px;
  }

  td,
  th {
    padding: 0px 30px;
  }

  th:nth-last-of-type(1) {
    text-align: right;
  }

  td:nth-last-of-type(1) {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

    &:hover {
      svg {
        fill: #444444;
        transition-delay: 100ms;
      }
    }
  }
`;

export const Control = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 0px 10px;

  div {
    width: 237px;
    height: 36px;
    border-radius: 4px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    padding: 0px 10px 0px 15px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      fill: #666666;
      width: 15px;
      height: auto;
    }
  }

  input {
    width: 100%;
    height: 36px;
    border: none;
    background-color: transparent;
    margin-left: 15px;

    ::-webkit-input-placeholder {
      /* Edge */
      color: #666666;
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #666666;
    }

    ::placeholder {
      color: #666666;
    }
  }

  button {
    width: 142px;
    height: 36px;
    border-radius: 4px;
    background-color: #7d40e7;
    border: none;
    font-size: 14px;
    color: #ffffff;
    font-weight: 700;
    text-align: center;
  }
`;

export const MenuPopOver = styled.div`
  position: absolute;
  width: 200px;
  height: auto;
  background-color: #fff;
  z-index: 999;
  top: ${({ positionY }) => positionY + 55}px;
  left: ${({ positionX }) => positionX + 40}px;
  visibility: ${({ visible }) => !visible && 'hidden'};
  border-radius: 5px;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.15));

  &:before {
    border: 15px solid transparent;
    border-bottom-color: #fff;
    content: '';
    top: -30px;
    left: 85px;
    position: absolute;
  }

  span {
    font-size: 18px;
    line-height: 20px;
    color: #999999;
    font-weight: 400;
    margin-left: 20px;
  }
  ul {
    li {
      display: flex;
      align-items: center;

      list-style-position: inside;
      border-bottom: 1px solid #eeeeee;
      padding: 25px 25px;
      cursor: pointer;

      &:hover {
        background: #ffff;
        span {
          transition-delay: 100ms;
          color: #444;
        }
      }
    }
  }
  svg {
    cursor: pointer;
    width: 20px;
    height: auto;
  }
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  top: 0px;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 500px;
  height: auto;
  min-height: 500px;
  border-radius: 4px;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));
  background-color: #ffffff;
  padding: 30px 0px 30px;

  svg {
    fill: #666666;
    height: 40px;
    width: auto;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  h1 {
    font-size: 16px;
    color: #444444;
    font-weight: 700;
  }

  div {
    border-bottom: #666666 1px solid;
    padding: 20px 0px;
    margin: 0px 60px;

    p {
      margin-top: 10px;
      font-size: 16px;
      color: #666666;
      font-weight: 400;
    }
  }

  div:nth-last-of-type(1) {
    display: flex;
    flex-direction: column;
    img {
      margin-top: 10px;
      width: 300px;
      height: auto;
      align-self: center;
    }
    border: none;
  }
`;

export const Close = styled.aside`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    svg {
      fill: #444;
    }
  }
`;
