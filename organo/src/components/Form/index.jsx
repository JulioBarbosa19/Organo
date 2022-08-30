import './Form.css';
import Input from '../Input'
import ListSuspense from '../ListSuspense';
import Button from '../Button';
import { useState } from 'react';
const Form = (props) => {
  

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const handleOnsubmit = (e) =>{
        e.preventDefault();
      props.cadastroColaborador({
        nome,
        cargo,
        imagem,
        time
      })
      setNome('')
      setCargo('')
      setImagem('')
      setTime('')

   
    }

    return (
        <section className='form'>
            <form onSubmit={handleOnsubmit}>
                <h2>Preencha os dados para criar o card do colega</h2>
                <Input 
                valor={nome}
                aoAlterado = {valor => setNome(valor)}
                obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <Input 
                 valor={cargo}
                 aoAlterado = {valor => setCargo(valor)}
                obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <Input 
                 valor={imagem}
                 aoAlterado = {valor => setImagem(valor)}
                label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListSuspense 
                
                obrigatorio={true} label="Time" itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;