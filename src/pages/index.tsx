import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../styles/pages/Home';



const Home: NextPage = () => {
  return (
    <Container >
      <Head>
        <title>Agil Software</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../images/logo-agil-software-without-background.png" />
      </Head>

      <main className='main_home'>
       <div className="left">
        <h1 className='text_main'>
          O Que acha de  ter o <br/> 
          site  perfeito para o <br/>
          seu negócio?
        </h1>
        <p className='text_secondary'>
          Solicite um orçamento e descubra qual o <br/> 
          melhor plano para você e o seu negócio.
        </p>

        <a 
          className='orcamento_link'
          href='https://wa.me/5585984670723'
          target='_blank'
          rel="noreferrer"
        > 
          Solicitar Orçamento
        </a>


       </div>

       <div className="right">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam hic suscipit laudantium similique molestiae excepturi odit quam? Quia aperiam adipisci minus molestias nam aliquid sint a. Ut aperiam tempore dolor.</p>
       </div>
      </main>

      <section className='services' id='services'>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non nesciunt debitis eum consequuntur veniam, laboriosam reprehenderit rem, reiciendis repellat temporibus ad, minima unde. Laborum quia accusantium inventore libero animi.</div>
        <div></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cumque, reprehenderit minus maiores natus nulla aperiam obcaecati fuga, atque qui id veniam, quod quis debitis voluptate facere harum neque eius.</div>
      </section>

      <section className='product' id='products'>

        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis corporis numquam sed repellat explicabo at animi repudiandae sunt reprehenderit beatae, aspernatur debitis molestias et quam placeat voluptatem eligendi tenetur nesciunt!

        <ul>

          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repudiandae maiores excepturi quaerat accusantium nemo nihil eum nobis dolor! Nihil sunt esse, quibusdam atque doloremque aspernatur porro sed autem aliquam.</li>
        </ul>
      </section>

      <section className='contact_form' id='contact_form'>


      </section>



      <footer >
        
      </footer>
    </Container>
  )
}

export default Home
