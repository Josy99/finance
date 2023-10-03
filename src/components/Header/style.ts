import { styled } from "styled-components"

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NewTransactionButton = styled.button`
  border: none;
  padding: 0 1.25rem;
  cursor: pointer;
  height: 50px;
  font-weight: bold;
  border-radius: 6px;
  background-color: ${(props) => props.theme["green-500"]};
  color: white;

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
    transition: background-color 0.5s;
  }
`
