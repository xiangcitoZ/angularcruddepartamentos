import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Departamento } from "../models/departamento";

@Injectable()
export class DepartamentosService{
    constructor(private _http: HttpClient){}

    delete(id: string): Observable<any>{
        var request = "/api/departamentos/" + id;
        var url = environment.urlApiDepartamentos + request;
        return this._http.delete(url);
    }


    update(departamento: Departamento): Observable<any>{
        
        var json = JSON.stringify(departamento);
       
        var header = new HttpHeaders().set("Content-Type", "application/json")
        var request = "/api/departamentos";
        var url = environment.urlApiDepartamentos + request;
        return this._http.put(url, json, {headers: header});

    }



    create(departamento: Departamento): Observable<any>{
        //CONVERTIMOS NUESTRO OBJETO MODEL A JSON
        var json = JSON.stringify(departamento);
        //DEBEMOS INDICAR EL TIPO DE OBJETO A ENVIAR EN LA PETICION
        //EN EL header
        var header = new HttpHeaders().set("Content-Type", "application/json")
        var request = "/api/departamentos";
        var url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, {headers: header});

    }

    getDepartamentos(): Observable<any>{
        var request = "/api/departamentos"
        var url = environment.urlApiDepartamentos + request;
        return this._http.get(url);
    }

}