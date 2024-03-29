import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/shared/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) {}  

  canActivate(): boolean {  
    if (!this.AuthService.isLoggedIn) {  
        this.router.navigateByUrl("auth/login");  
    }  
    return this.AuthService.isLoggedIn; 
  }
  
}
