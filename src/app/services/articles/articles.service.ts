import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get(`assets/data/articles/articles.json`);
  }
}
