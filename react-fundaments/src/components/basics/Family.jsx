import React from "react";

import FamilyMember from "./FamilyMember";

export default props => {

    const { surname } = props;

    return (
        <div>
            <FamilyMember name="Vinicius" surname={surname} />
            <FamilyMember name="Joao Vitor" surname="Ferreira" />
            <FamilyMember name="Gilson" {...props} />
        </div>
    );
}
