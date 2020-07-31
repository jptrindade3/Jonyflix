import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
        name: '',
        description: '',
        color: '',
    }

    /*
    States
    */
    const [registeredCategories, setRegCateg] = useState([]);
    const [newCateg, setNewCateg] = useState(defaultCategValues);


    /*
    Functions
    */
    function handleSubmit(e){
        e.preventDefault();
        setRegCateg([
            ...registeredCategories, //notação pra pegar todos os itens atuais do vetor e os manter
            newCateg,
        ]);

        setNewCateg(defaultCategValues);//Reseta os campos depois de preenchidos e enviados
    }

    function handleCategValues(key, eValue){
        setNewCateg({
            ...newCateg,
            [key]: eValue, //Esse [] faz com que o nome do campo seja dinâmico, ou seja, possa mudar de valor
        })
    }

    function handleChange(e){
        handleCategValues(
            e.target.getAttribute('name'),
            e.target.value,
        );
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

        const URL_TOP = 'http://localhost:3333/categorias';
        fetch(URL_TOP);
        // setTimeout(() => {
        //     setRegCateg([
        //         ...registeredCategories, //notação pra pegar todos os itens atuais do vetor e os manter
        //         {
        //             "id": 1,
        //             "name": "Front End",
        //             "description": "Uma categoria bacana",
        //             "color": "#cbd1ff"
        //         },
        //         {
        //             "id": 2,
        //             "name": "Bakend End",
        //             "description": "Uma categoria mais bacana ainda",
        //             "color": "#cbd1ff"
        //         },
        //     ]);
        // }, 4 * 1000);
    }, []);

    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:
                    {newCateg.name}
                </h1>

                <form onSubmit={(e) => (handleSubmit(e))}>

                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="name"
                        value={newCateg.name}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descrição"
                        type="textarea"
                        name="description"
                        onChange={handleChange}
                        value={newCateg.description}
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="color"
                        onChange={handleChange}
                        value={newCateg.color}
                    />

                    <button>
                        Cadastrar
                    </button>
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
                                {registeredCategories.name}
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