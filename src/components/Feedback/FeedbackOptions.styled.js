import styled from '@emotion/styled'

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: auto;
  gap: 20px;
  padding: 0;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Item = styled.li`
`;

export const Button = styled.button`
 background-color: #e7ecf2;
    border: none;
    width: 100px;
    height: 40px;
    box-shadow: 2px 2px 2px 2px #6a6a6e;
    cursor: pointer;
    font-size: large;
    font-weight: 700;
    color: #293748;
    &:hover{
        background-color: #dbd9d9;
    }
    &:active {
  background-color: #b5b3b3;
  transform: translateY(2px);
  box-shadow: none;
`;