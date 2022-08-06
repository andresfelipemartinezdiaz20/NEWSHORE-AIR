import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Vuelos{

    private API_Vuelos = "https://recruiting-api.newshore.es/api/flights/2";

    constructor ( private http: HttpClient){

    }

    public getAllVuelos(): Observable<any>{
        return this.http.get(this.API_Vuelos);
    }
}