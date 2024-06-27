import { useEffect, useState } from "react";
import React from "react";
import { Tarefa } from "../../models/tarefa";

function TarefaListar() {
  const [tarefas, setTarefa] = useState<Tarefa[]>([]);

  useEffect(() => {
    fetch("http://localhost:5124/tarefa/listar/")
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa[]) => {
        setTarefa(tarefas);
      });
  }, []);

  function TarefaListar() {

    fetch("http://localhost:5124/tarefa/listar/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TarefaListar),
    })
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa) => {
        console.log(tarefa);
      });
  }

  return (
    <div>
      <button onClick={TarefaListar}>Listar Tarefa</button>
      <h1>Listar Tarefa</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((Tarefa) => (
            <tr>
              <td>{Tarefa.tarefaId}</td>
              <td>{Tarefa.titulo}</td>
              <td>{Tarefa.descricao}</td>
              <td>{Tarefa.criadoEm}</td>
              <td>{Tarefa.categoriaId}</td>
              <td>{Tarefa.criadoEm}</td>
              <td>{Tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListar;