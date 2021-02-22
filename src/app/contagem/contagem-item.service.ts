
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContagemItem, IContagemItem } from "./contagem-item";

@Injectable()
export class ContagemItemService {

  static readonly URL_API = environment.api + '/contagem_item';

  constructor(private httpClient: HttpClient) {
  }

  listar(filtro: IContagemItem): Observable<ContagemItem[]> {
    return this.httpClient.get<ContagemItem[]>(`${ContagemItemService.URL_API}`,{params: ContagemItem.toHttpParams(filtro)});
  }

  salvar(novx: ContagemItem): Observable<ContagemItem> {
    return this.httpClient.post<ContagemItem>(`${ContagemItemService.URL_API}`, novx);
  }

  ver(_id: number): Observable<ContagemItem> {
    return this.httpClient.get<ContagemItem>(`${ContagemItemService.URL_API}/${_id}`);
  }

  apagar(_id: number): Observable<any> {
    return this.httpClient.delete<any>(`${ContagemItemService.URL_API}/${_id}`);
  }

  apagarTds(itemId: number){
    return this.httpClient.delete<any>(`${ContagemItemService.URL_API}/tds/${itemId}`);
  }

}

