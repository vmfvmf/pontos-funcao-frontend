import { HttpParams } from "@angular/common/http";
import { Sistema } from "../sistemas/sistema";
import { Sprint } from "../sprints/sprint";
import { FuncaoDados } from "./contagens-detalhes/contagens-funcao-dados/funcao-dados";
import { Transacao } from "./contagens-detalhes/contagens-transacoes/transacao";
import { ItemContagem } from "./item-contagem";

export enum EscopoContagemEnum{
  SISTEMA,
  PROJETO,
  SPRINT
}

export class IContagem {
  id?: number;
  sistema?: Sistema;
  sprint?: Sprint;
  dataContagem?: Date;
  contador?: String;
  escopo?: EscopoContagemEnum;
  totalPf?: number;
  itens?: ItemContagem[];
}

export class Contagem {
  id?: number;
  sistema?: Sistema;
  sprint?: Sprint;
  dataContagem?: Date;
  contador?: String;
  escopo?: EscopoContagemEnum;
  totalPf?: number;
  itens?: ItemContagem[];

  constructor(i: IContagem){
    this.id = i.id;
    this.sistema = i.sistema;
    this.sprint = i.sprint;
    this.itens = i.itens;
    this.escopo = i.escopo;
    this.totalPf = i.totalPf;
    this.dataContagem = i.dataContagem;
    this.contador = i.contador;
  }

  public static toHttpParams(s: IContagem): HttpParams {
    let httpParams = new HttpParams();
      if (s.id !== undefined) {
        httpParams = httpParams.set('id', s.id.toString());
      }
      if (s.sistema !== undefined && s.sistema.id !== undefined) {
        httpParams = httpParams.set('sistema.id', s.sistema.id.toString());
      }
      if (s.sprint !== undefined && s.sprint.id !== undefined) {
        httpParams = httpParams.set('sprint.id', s.sprint.id.toString());
      }
      if (s.dataContagem !== undefined) {
        httpParams = httpParams.set('dataContagem', s.dataContagem.toString());
      }
      if (s.contador !== undefined) {
        httpParams = httpParams.set('contador', s.contador.toString());
      }
      if (s.escopo !== undefined) {
        httpParams = httpParams.set('escopo', s.escopo.toString());
      }
      return httpParams;
    }
}
