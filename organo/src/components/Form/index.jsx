import './Form.css';
import Input from '../Input'
import ListSuspense from '../ListSuspense';
import Button from '../Button';
const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Devops',
        'UX e Design',
        'Data Science',
        'Mobile'
    ]

    const handleOnsubmit = (e) =>{
        e.preventDefault();
        console.log("Form submitado!!!");
    }

    return (
        <section className='form'>
            <form onSubmit={handleOnsubmit}>
                <h2>Preencha os dados para criar o card do colega</h2>
                <Input obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <Input obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <Input label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListSuspense obrigatorio={true} label="Time" itens={times} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;