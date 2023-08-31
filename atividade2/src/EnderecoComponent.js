import React, { useState, useEffect } from 'react';

function EnderecoComponent() {
    const [endereco, setEndereco] = useState(null);

    useEffect(() => {
        fetch('https://viacep.com.br/ws/52080090/json/')
        .then(response => response.json())
        .then(data => {
            setEndereco(`${data.logradouro} - ${data.localidade}, ${data.uf}`);
        });
    }, []);

return (
    <div>
        {endereco ? endereco : 'Carregando...'}
    </div>
    );
}

export default EnderecoComponent;





