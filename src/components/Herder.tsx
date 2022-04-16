import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import logo from '../images/logo-agil-software-without-background.png';


const Container= styled.header`
    width: 100vw;
    height: 130px;
    background-color: black;

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;

    Image.logo-agil-software-without-background{
        height: 80px;
        width: 80px;
    }


    nav{
        min-height: 60px;
        width: 500px;
        display: flex;

        align-items: center;
        justify-content: space-between;


    }
    nav .menu{
        min-height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

    }

    nav .menu li{
        list-style-type: none;
    }
    nav .menu li a{
        text-decoration: none;
        color: #fff;
        font-family: Roboto Arial, Helvetica, sans-serif;

    }




`


function Header(){
    return (
        <Container>
            <Image
                src='/logo-agilsoftware-sem-fundo.png'
                alt='Logo Agil Software' 
                height={80}
                width={80}
            />

            <nav>
                <ul className='menu'>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            

        </Container>
    )
}

export default Header;