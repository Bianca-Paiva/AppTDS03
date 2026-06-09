import React, { useState } from "react";

const RecoveryRequisitionViewModel = () => {

    // Guarda o email digitado pelo usuário
    // values = dados atuais | setValues = função para atualizar os dados
    const [values, setValues] = useState({
        userEmail: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({
            ...values,          // mantém os valores atuais
            [property]: value   // altera apenas o campo informado
        });
    }

    // Exibe os dados atuais no console
    const RecoveryRequisition = () => {
        console.log(JSON.stringify(values));
    }

    return {
        ...values,
        onChange,
        RecoveryRequisition
    };
}


export default RecoveryRequisitionViewModel;