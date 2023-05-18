import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export default props => {

    const [number, setNumber] = useState(1);
    const [factorial, setFactorial] = useState(1);

    const calcFactorial = num => {
        const n = parseInt(num);
        if (n < 0) return -1;
        if (n === 0) return 1;

        return calcFactorial(n - 1) * n;
    }

    useEffect(() => {
        setFactorial(calcFactorial(number));
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle title="Hook UseEffect" subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercise #01" />
            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">{factorial !== -1 ? factorial : "Don't exist"}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
        </div>
    );
}
