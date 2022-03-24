import styled from 'styled-components';

const StyledHome = styled.div`
  color: white;

  .filter {
    text-align: center;
  }

  .filter input {
    border: 1px solid #6f6f6f;
    color: #6f6f6f;
    background-color: var(--bg-color);
    border-radius: 25px;
    width: 35%;
    padding: 25px;
    margin-top: 50px;
  }

  .filter input: focus {
    border: 1px solid var(--light-purple);
    transition: 1s;
    outline: none;
  }

  .row {
    // border: 1px solid red;
    margin: 20px;
  }
  
  .poster-container {
    border: 1px solid blue;

    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 5vh;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .row img {
    width: 300px;
    margin: auto 8px;
  }
  
  .row img: hover {
    opacity: 0.3;
    cursor: pointer;
  }

  .row img: hover + .btn {
    // display: block;
    visibility: visible;
  }

  .heading {
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 32px;
  }

  .btn {
    // border: 0.5px solid yellow;
    display: flex;
    justify-content: flex-end;
    margin-top: -65px;
    z-index: 1;
    

    display: hidden;
  }

  .btn .delete {
    // border: 1px solid red;
    border: none;
    color: red;
    font-size: 32px;
  }

  .btn .completed {
    border: none;
    font-size: 32px;
    // font-weight: bold;
  }





`;

export default StyledHome;
