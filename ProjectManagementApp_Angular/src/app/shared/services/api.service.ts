import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { CommonToasterService } from "./common-toaster.service";
import { generalMessage } from "../constants/messages";

@Injectable({
    providedIn: 'root'
})

export class APIService {
    private baseURL: string = environment.apiRootURL;

    constructor(private http: HttpClient,
        private toaster: CommonToasterService) {}

    getRequest(link: string): Observable<any> {
        return this.http.get<any>(this.getSanitizedURL(link));
    }

    getDownload(link: string, bodyPayload: any): Observable<any> {
        return this.http.post(this.getSanitizedURL(link), bodyPayload, {
            responseType: 'blob',
        });
    }

    getDownloadRequest(link: string): Observable<any> {
        return this.http.get(this.getSanitizedURL(link), {
            responseType: 'blob',
        });
    }

    getRequestWithQueryData(link: string, data: any): Observable<any> {
        return this.http.get<any>(this.getSanitizedURL(link), {
            params: data,
        });
    }

    postRequest(link: string, data: any): Observable<any> {
        return this.http.post<any>(this.getSanitizedURL(link), data);
    }

    patchRequest(link: string, data: any): Observable<any> {
        return this.http.patch<any>(this.getSanitizedURL(link), data);
    }

    deleteRequest(link: string): Observable<any> {
        return this.http.delete<any>(this.getSanitizedURL(link));
    }

    postFileRequest(link: string, data: any) {
        const req = new HttpRequest('POST', this.getSanitizedURL(link), data, {
            reportProgress: true,
            responseType: 'json',
        });

        return this.http.request(req);
    }

    getJSONFileRequest(jsonPath: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get<any>(jsonPath, { headers }).pipe(map((x) => x));
    }

    getSanitizedURL(url: string, differentBaseURL?: boolean): string {
        // if browser is appending extra white space for any text then remove it.
        return (differentBaseURL ? url : this.baseURL + url).replace(/[\u200B\uFEFF]/g, "");
    }

    customGetRequest(link: string): Observable<any> {
        return this.http.get<any>(this.getSanitizedURL(link, true));
    }

    public handleErrorRequest(error: any) {
        if (error && error.error) {
            if (error.error.detail) {
                this.toaster.showError(error.error.detail);
            }
            else {
                this.toaster.showError(generalMessage.ERROR_MESSAGE);
            }
        }
    }
}