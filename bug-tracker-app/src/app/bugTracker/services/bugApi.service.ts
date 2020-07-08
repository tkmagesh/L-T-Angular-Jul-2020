import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Bug } from "../models/Bug";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable()
export class BugApiService{
    
    private serviceEndPoint = environment.serviceEndPoint;
    
    constructor(private httpClient : HttpClient ){

    }
    
    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>(this.serviceEndPoint);
    }
    save(bugData : Bug) : Observable<Bug>{
        if (bugData.id === 0){
            return this.httpClient
                .post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.httpClient
                .put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }
    remove(bugData : Bug) : Observable<any>{
        return this.httpClient
            .delete<Bug>(`${this.serviceEndPoint}/${bugData.id}`);
    }
}