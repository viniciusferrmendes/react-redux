import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

export default props => {

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [value1]);

    useEffect(() => {
        count.current = count.current + 1;
        myInput1.current.focus();
    }, [value2]);

    const merge = (string1, string2) => {
        let result = "";
        let i = 0;

        while (i < string1.length || i < string2.length) {
            result += (string1[i] || "") + (string2[i] || "");
            i++;
        }

        return result;
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef" subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercise #01" />
            <div className="center">
                <div>
                    <span className="text">Value: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text" className="input"
                    value={value1} ref={myInput1}
                    onChange={e => {
                        setValue1(e.target.value);
                    }}
                />
            </div>

            <SectionTitle title="Exercise #02" />
            <div className="center">
                <input
                    type="text" className="input"
                    value={value2} ref={myInput2}
                    onChange={e => {
                        setValue2(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}
