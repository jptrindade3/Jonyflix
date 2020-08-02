import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

//Templates
import PageDefault from '../../../Templates/PageDefault'
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    /* 
        Pra que fique mais claro, o useState funciona assim:
    Declaramosuma constante com um "array" de 2 posições, sendo
    a primeiro o nome da nossa variável de estado e a segunda 
    o nome da função que utilizaremos para alterar o estado. Na 
    atribuição, deixamos o valor com o qual desejamos que o nosso
    estado seja inicializado.
        Lembre que o estado sempre espera um valor do mesmo tipo
    para substituir o antigo: se você incializa com uma string, ele
    espera uma nova string; se você inicializa com um vetor, ele
    espera um novo vetor, e assim por diante

    */

    const defaultCategValues = {
        titulo: '',
        link_extra: {
            text: '',
            url: '',
        },
        cor: '',
    }

    /*
    States
    */
    const [registeredCategories, setRegCateg] = useState([]);
    const {
        handleChange, 
        clearForm,
        newValue, 
    } = useForm(defaultCategValues);
    
    function handleSubmit(e){
        e.preventDefault();
        setRegCateg([
            ...registeredCategories, //notação pra pegar todos os itens atuais do vetor e os manter
            newValue,
        ]);

        clearForm();//Reseta os campos depois de preenchidos e enviados
    }

    /*
    O useEffect é um hook que nos permite executar uma função
    assim que determinado efeito ocorrer na página. Temos um 
    efeito "gatilho" que dispara o evento que nós queremos que
    aconteça

    Sendo assim, o useEffect precisa de 2 parâmetros: o primeiro
    é o que nós queremos que aconteça, já o segundo é o que espera-
    mos que aconteça para que o nosso evento seja desencadeado.

    Quando queremos que o código rode somente quando inicializamos a
    página, passamos como parâmetro um array vazio. Caso não coloquemos
    nada nesse parâmetro, a nossa função será executada a cada alterção
    que tivermos na página, o que pode não ser o ideal.

    Para escutarmos outras mudanças na página que não só a de carrega-
    mento, colocamos dentro do array vazio o que queremos ver mudar para
    que nossa função seja executada
    */
    useEffect(() => {

        const URL_TOP = window.location.hostname.includes('localhost') 
        ? 'http://localhost:3333/categorias'
        : 'https://jonyflix.herokuapp.com/categorias';
        fetch(URL_TOP) //Faz uma requisição pro nosso server json
        .then(async (serverResponse) => {//Pega a resposta do nosso server ao ser requisitado
            const response = await serverResponse.json(); //Converte a resposta dada em texto para json
            setRegCateg([
                ...response,
            ]);
        });
    }, []);

    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:
                    {newValue.titulo}
                </h1>

                <form onSubmit={(e) => (handleSubmit(e))}>

                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="titulo"
                        value={newValue.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descrição"
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                        value={newValue.link_extra.text}
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        onChange={handleChange}
                        value={newValue.cor}
                    />

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>

                {registeredCategories.length === 0 && (
                    <div>
                        {/*Aqui fica o nosso loading do que vem do nosso backend */}
                        Loading...
                    </div>
                )}

                <ul>
                    {registeredCategories.map((registeredCategories, index) => {
                        return(
                            // O ideal é que cada item da lista tenha um key única
                            <li key = {`${registeredCategories}${index}`}>
                                {registeredCategories.titulo}
                            </li>
                        )
                    })}
                </ul>

                <Link to="/">
                    Ir para a home
                </Link>
            </PageDefault>
        </>
    );
}

export default CadastroCategoria;