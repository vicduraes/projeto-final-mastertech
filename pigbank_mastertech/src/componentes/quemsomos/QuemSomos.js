import React, { Component } from 'react';
import './QuemSomos.css';
import porco from './porco.jpg';

class QuemSomos extends Component {

    openContainer(){
      this.props.history.push('/conteudo');
    }
  
    render() {
      return (
        <section className='sectionQuemSomos'>
          <h3 className= 'tituloQuemSomos'>Quem Somos</h3>
          <p className='paragrafoQuemSomos'>Existem muitas variações disponíveis de passagens de Lorem Ipsum,
           mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor,
           ou palavras aleatórias que não parecem nem um pouco convincentes.
           Se você pretende usar uma passagem de Lorem Ipsum, precisa ter 
           certeza de que não há algo embaraçoso escrito escondido no meio do texto.
           Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário,
           fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com 
           mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para
           gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não 
           características, etc.</p>
           <img className="porco" src={porco} alt='porco'/>
        </section>

      );
    }
  }
  
  export default QuemSomos;