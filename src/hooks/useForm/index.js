import {useState} from 'react';

function useForm(defaultValues){
    const [newValue, setNewValue] = useState(defaultValues);

    function handleValues(key, eValue){
        setNewValue({
            ...newValue,
            [key]: eValue, //Esse [] faz com que o nome do campo seja dinâmico, ou seja, possa mudar de valor
        })
    }

    function handleChange(e){
        handleValues(
            e.target.getAttribute('name'),
            e.target.value,
        );
    }

    function clearForm(){
        setNewValue(defaultValues);
    }

    return{
        handleChange,
        clearForm,
        newValue,
    };
}

export default useForm;