import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
  }

  .switch input {
    display: none;
  }

  .Switch {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .Switch:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  input:checked + .Switch {
    background-color: var(--primary);
  }

  input:focus + .Switch {
    box-shadow: 0 0 1px var(--primary);
  }

  input:checked + .Switch:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  /* Rounded Switchs */
  .Switch.round {
    border-radius: 34px;
  }

  .Switch.round:before {
    border-radius: 50%;
  }
`;
