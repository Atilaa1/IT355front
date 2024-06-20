import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage/storage.service";

@Injectable()
export class AdminLoggedInGuard implements CanActivate{

    constructor(private _storageService: StorageService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAdminLoggedIn = this._storageService.isAdminLoggedIn();
        return isAdminLoggedIn;
    }
}
