import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  .main_home{
    width: 98%;
    height: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    background-color:#fff;

  }
  .main_home .left{
    width:50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    justify-content: space-evenly;
    background-color: #22beee;



  }

  .main_home .left h1{
   
    font-size: 3rem;
    color:#fff;
  }

  .main_home .left p{
    font-size: 1.3rem;
    color:#fff;
  }

  .main_home .left .orcamento_link{

    border: solid #c8d0d3 2px ;
    width: 150px;
    height: 40px;
    background-color: orange;
    color:#fff;

    text-decoration-line:none;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .main_home .left .orcamento_link:hover{
    background-color: #f8b333;
    width: 152px;
    height:42px;
    transition:1.3s;

  }

  .main_home .right{
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #d313da;
    

    justify-content: space-between;

  }

`;

export default Container;