import * as categoria from "./categoria";

export interface Tarefa{

    tarefaId: String;
    titulo: String;
    descricao: String;
    criadoEm?: String;
    categoria: categoria.Categoria;
    categoriaId: String;
    status: String;

}