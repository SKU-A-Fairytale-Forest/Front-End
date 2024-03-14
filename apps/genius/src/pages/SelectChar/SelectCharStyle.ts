// SelectCharStyle.ts

import styled from 'styled-components';

interface CharacterButtonProps {
  isAlKong?: boolean;
}

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  width: 100vw; 
`;

export const CharacterContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; 
  border: 2px solid transparent;

  &:nth-child(1) {
    background-image: url('./src/assets/images/alkong.png');
  }

  &:nth-child(2) {
    background-image: url('./src/assets/images/dalkong.jpg');
  }

  &.selected {
    border: 2px solid #7EC7B1;
  }
`;

export const CharacterButton = styled.button<CharacterButtonProps>`
  font-size: 30px;
  font-weight: bold;
  padding: 20px 35px;
  border-radius: 40px;
  border: none;
  background-color: #ffffff;
  color: ${({ isAlKong }) => (isAlKong ? '#7EC7B1' : '#D057A9')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: color 0.3s, transform 0.3s; /* 글자색 및 이동 트랜지션 추가 */

  &:hover {
    color: ${({ isAlKong }) => (isAlKong ? '#6DA697' : '#B84890')};
    transform: translateY(-2px); /* 호버 시 살짝 위로 이동 */
  }
`;

export const AlKongButton = styled(CharacterButton)<CharacterButtonProps>`
  color: #7EC7B1;
  &:hover {
    color: #6DA697;
    transform: translateY(-2px); /* 호버 시 살짝 위로 이동 */
  }
`;

export const DalKongButton = styled(CharacterButton)<CharacterButtonProps>`
  color: #D057A9;
  &:hover {
    color: #B84890;
    transform: translateY(-2px); /* 호버 시 살짝 위로 이동 */
  }
`;