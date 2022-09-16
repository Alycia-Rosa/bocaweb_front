export const Lista = ({lista})=>{
    return(
      <div>
        <p className='Qt-Oda'>{lista.length} Objetos Cadastrados </p>
          <div className='lista'>
            {lista.map(oda => (
              <div key={oda._id} className='objeto'>
                <h1 className="titulo">Nome: {oda.nome}</h1>
                <p className="usuario">Usuário: {oda.usuario}</p>
                <p>Descrição: {oda.descricao}</p>
                <p>Data Inclusão: {oda.data_inclusao}</p>
                <p className="palavra">Palavras Chave: {oda.palavras_chave}</p>
              </div>
            ))}
          </div>
      </div>
    )
}
