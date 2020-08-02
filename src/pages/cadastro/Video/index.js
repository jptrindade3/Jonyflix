import React, {useState, useEffect} from 'react';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

//Templates
import PageDefault from '../../../Templates/PageDefault'
import { Link, useHistory } from 'react-router-dom';

// Components
import FormField from '../../../components/FormField';

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo);
    const {newValue, handleChange, clearForm} = useForm({
        titulo: 'Video Padrão',
        url: 'https://www.youtube.com/watch?v=zB32uO-FcgY',
        categoria: 'Front End'
    });

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
    }, []);

    function handleSubmit(e){
        e.preventDefault();

        /*
        Essa função serve pra dentro do nosso vetor de vídeos
        retornardos, buscarmos a categoria que procuramos, e
        caso ela exista, ala será retornada.
        */

        const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === newValue.categoria;
        });

        videosRepository.create({
            titulo: newValue.titulo,
            url: newValue.url,
            categoriaId: categoriaEscolhida.id,
        })
        .then(() => {
            history.push('/');
            clearForm();//Reseta os campos depois de preenchidos e enviados
        });
    }

    return(
        <>
            <PageDefault>
                <h1>Cadastro de video</h1>

                <form onSubmit={(e) => (handleSubmit(e))}>
                    <FormField
                        label="Título da Categoria"
                        name="titulo"
                        value={newValue.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL"
                        name="url"
                        value={newValue.url}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Categoria"
                        name="categoria"
                        value={newValue.categoria}
                        onChange={handleChange}
                        suggestions = {categoryTitles}
                    />

                    <Button type="submit">
                        Cadastrar
                    </Button>
                </form>

                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
                </Link>
                
            </PageDefault>
        </>
    );
}

export default CadastroVideo;