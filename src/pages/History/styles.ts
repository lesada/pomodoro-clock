import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 3.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.gray[100]};
`;

export const List = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    background-color: ${({ theme }) => theme.gray[600]};
    padding: 1rem;
    text-align: left;
    color: ${({ theme }) => theme.gray[100]};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  tr {
    &:last-child {
      td {
        &:first-child {
          border-bottom-left-radius: 8px;
        }

        &:last-child {
          border-bottom-right-radius: 8px;
        }
      }
    }
  }

  td {
    background-color: ${({ theme }) => theme.gray[700]};
    border-top: 4px solid ${({ theme }) => theme.gray[800]};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
    }

    &:last-child {
      padding-right: 1.5rem;
    }
  }
`;

interface StatusProps {
  $status: "completed" | "interrupted" | "pending";
}

const STATUS_COLORS = {
  completed: "green",
  interrupted: "red",
  pending: "yellow",
};

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, $status }) =>
      theme[STATUS_COLORS[$status]][500]};
  }
`;
