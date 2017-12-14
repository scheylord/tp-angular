import {Injectable} from '@angular/core';
import {Http, RequestMethod, Headers, RequestOptions, Request} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {StorageService} from "../storage/storage.service";

@Injectable()
export class APIHelper {
    private _url: string;

    constructor(private http: Http, private storage: StorageService) {
        this._url = "https://api.ousporter.fr/angular";
    }

    requestApi({action, method = 'GET', datas = {}, urlCustom = null, basicUrl = false, customToken = null}: { action: string, method?: string, datas?: any, urlCustom?: string, basicUrl?: boolean, customToken?: string }): Promise<any> {
        // On chosit la méthode voulue par l'utilisateur
        let listRequests = {
            "get": RequestMethod.Get,
            "post": RequestMethod.Post,
            "put": RequestMethod.Put,
            "delete": RequestMethod.Delete
        };
        let methodWanted = listRequests[method.toLowerCase()] ? listRequests[method.toLowerCase()] : listRequests["get"];
        let urlToUse = this.url;

        if (urlCustom) {
            urlToUse = urlCustom;
        }
        else if (!basicUrl) {
            urlToUse += "";
        }

        // On indique le type des datas qu'on envoie
        let header = new Headers();
        header.append('Content-Type', 'application/json');
        // header.set('X-Token', customToken); // Envoyer le token s'il est passé en paramètre

        // On crée notre requête
        let options = new RequestOptions({
            method: methodWanted,
            url: urlToUse + action, // L'url qu'on veut requêter
            headers: header,
            body: datas
        });
        let request = new Request(options);

        // On transforme l'observable en promesse, plus adapté à notre requête
        return this.http.request(request) // -> Requête envoyée
            .map(res => res.json())
            .map(res => {
                if (res && res.success) {
                    return res.response;
                } else {
                    return false;
                }
            })
            .toPromise();
    }

    get url(): string {
        return this._url;
    }
}
