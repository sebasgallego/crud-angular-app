import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Activity} from "../Modelo/Activity";
import {Employed} from "../Modelo/Employed";

@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    constructor(private http: HttpClient) {
    }

    Url_base = 'http://localhost:3000/';

    setActivity(nameActivity: String) {
        return this.http.post<any>(this.Url_base + 'activity/save', {name: nameActivity});
    }

    editActivity(params: Activity) {
        return this.http.post<any>(this.Url_base + 'activity/edit', params);
    }

    assignedActivity(params: Activity) {
        return this.http.post<any>(this.Url_base + 'activity/assigned', params);
    }

    assignedDateStar(params: Activity) {
        return this.http.post<any>(this.Url_base + 'activity/date_star', params);
    }

    deleteActivity(params: Activity) {
        return this.http.post<any>(this.Url_base + 'activity/delete', params);
    }

    finishedActivity(params: Activity) {
        return this.http.post<any>(this.Url_base + 'activity/finished', params);
    }

    getActivities() {
        return this.http.get<Activity[]>(this.Url_base + 'activity/all');
    }

    setEmployed(params: Employed) {
        return this.http.post<any>(this.Url_base + 'employed/save', params);
    }

    deleteEmployed(params: Employed) {
        return this.http.post<any>(this.Url_base + 'employed/delete', params);
    }

    getEmployees() {
        return this.http.get<Employed[]>(this.Url_base + 'employed/all');
    }

}
