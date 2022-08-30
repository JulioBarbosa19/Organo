

import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Input from './components/Input';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {
  const times = [
      {
        nome:'Programação',
        corPrimaria:'#57C278',
        corSecundaria:'#D9F7E9'
      },
      {
        nome:'Front-End',
        corPrimaria:'#82CFFA',
        corSecundaria:'#E8F8FF'
      },
      {
        nome:'Devops',
        corPrimaria:'#E06B69',
        corSecundaria:'#FDE7E8'
      },
      {
        nome:'UX e Design',
        corPrimaria:'#DB6EBF',
        corSecundaria:'#FAE9F5'
      },
      {
        nome:'Data Science',
        corPrimaria:'#A6D157',
        corSecundaria:'#F0F8E2'
      },
      {
        nome: 'Mobile',
        corPrimaria:'#FFBA05',
        corSecundaria:'#FFF5D9'
      }
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const novoColaborador = (colaborador) =>{
     setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Form  times={times.map(time => time.nome)} cadastroColaborador={novoColaborador}/>
       {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
     
     <Rodape />

    </div>
  );
}

export default App;
