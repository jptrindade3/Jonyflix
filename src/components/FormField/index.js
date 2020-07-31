import React from "react";
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const FormFieldWrapper = styled.div`
    position: relative;
    textarea{
        min-height: 150px;
    };

    input[type = 'color']{
        padding-left: 56px;
    }
`;

// Essas partes que envolvem a edição das labels são as responsáveis por fazer com que o nome reduza a label ao clicarmos no campo
const Label = styled.label``;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;


`;

// Se algum dia ficar a dúvida de como se funciona o esquema do
// `${}`, procure por tag de template string
const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outLine: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    /* Responsável por fazer a parte de baixo do input ficar azul */
    &:focus{
        border-bottom-color: var(--primary);
    }

    /* Parte responsável por diminuir as labels na hora de digitar no campo */
    &:focus:not([type='color']) + span {
        transform: scale(.6) translateY(-10px);
    }

    /* Com essa função aqui dentro, eu posso fazer com que ela
    retorne qualquer alteração no CSS que eu queira, e é isso
    que vamos utilizar pra garantir que a label não vai voltar
    ao tamanho normal após ter o campo preenchido. */
    ${({ hasValue }) => {
        return hasValue && css`
            &:not([type='color']) + ${Label.Text} {
            transform: scale(.6) translateY(-10px);
            }
        `;
    }}
`;

function FormField({label, type, name, value, onChange}){
    const fieldId = `id_${name}`;
    const isTextarea = type === 'textarea';
    const tag = isTextarea ? 'textarea' : 'input';
    const hasValue = Boolean(value.length); 

    return(
        <FormFieldWrapper>
            <Label
            htmlFor={fieldId}
            >              
                <Input
                    as={tag} 
                    type={type}
                    value = {value}
                    name = {name}
                    onChange ={onChange}
                    hasValue = {hasValue}
                 />
                 {/* Para que essa próxima tag funcione, o span,
                 que tem o efeito dentro do input, é necessáro
                 que ele venha depois da tag Input */}
                 <Label.Text>
                    {label}:
                </Label.Text>
            </Label>
        </FormFieldWrapper>
    );
}
/*
    https://www.npmjs.com/package/prop-types

    Os proptypes são os tipos das variáveis às quais
    condicionamos as nossas props. É um tipo de typagem
    feita para saber qual o tipo de dado esperado quando
    se recebe uma prop, e avisa caso o dado recebido fuja
    do esperado

    fazendo o chamado desse objeto no nosso componente,
    definimos como esperamos que sejam as nossas props
    e, além disso, se elas dados obrigatórios ou não de
    serem enviados para os componentes
*/
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

/* 
    Aqui vão os valores padrões a serem assumidos caso não
    Recebamos nenhuma dessas Props. Se não vier nenhuma in-
    formação do que devemos ter como prop type, a considera-
    remos como type text
*/
FormField.defaultProps = {
    type: 'text',
    value: '',
};

export default FormField;