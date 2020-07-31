import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//Templates
import PageDefault from '../../../Templates/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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
        color: '#000',
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
        console.log('passou na handle submit');
        e.preventDefault();
        setRegCateg([
            ...registeredCategories, //notação pra pegar todos os itens atuais do vetor e os manter
            newCateg,
        ]);

        setNewCateg(defaultCategValues);//Reseta os campos depois de preenchidos e enviados
    }

    function handleCategValues(key, eValue){
        console.log('passou na handle categ values');
        setNewCateg({
            ...setNewCateg,
            [key]: eValue, //Esse [] faz com que o nome do campo seja dinâmico, ou seja, possa mudar de valor
        })
    }

    function handleChange(e){
        console.log('passou na handle change');
        handleCategValues(
            e.target.getAttribute("name"),
            e.target.value,
        );
    }


    return(
        <>
            <PageDefault>
                <h1>Cadastro de Categoria:</h1>

                <form onSubmit={(e) => (handleSubmit(e))}>

                    <FormField
                        value={newCateg.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                        label="Nome da Categoria"
                    />

                    <FormField
                        value={newCateg.description}
                        onChange={handleChange}
                        name="description"
                        type="textarea"
                        label="Descrição"
                    />

                    <FormField
                        value={newCateg.color}
                        onChange={handleChange}
                        name="color"
                        type="color"
                        label="Cor"
                    />

                    <Button>
                        Cadastrar
                    </Button>
                </form>

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