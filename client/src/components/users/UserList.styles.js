import { styled } from "styled-components";

export const StyledUserList = styled.div`
  .user-details {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 0.5fr;
    text-align: center;
    border-radius: 4px;
    margin: 10px auto;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    word-wrap: break-word;
    word-break: break-all;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .delete {
        cursor: pointer;
        &:hover {
          color: red;
        }
      }

      .edit {
        cursor: pointer;
        &:hover {
          color: gray;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .user-details {
      font-size: 14px;
    }
  }
`;
