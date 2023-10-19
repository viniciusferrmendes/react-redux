import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const UseRef = (props) => {

    const [count, inc, dec] = useCounter(10);
    const URL = "http://files.cod3r.com.br/curso-react/estados.json";

    const response = useFetch(URL);

    function showStates(states) {
        return states.map(({ nome, sigla }) => <li key={sigla}>{nome} - {sigla}</li>);
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercise #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec()}>-1</button>
                    <button className="btn" onClick={() => inc()}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercise #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef;
