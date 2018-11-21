import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TokenStorage } from './token-storage';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth-inteceptor';
import {UrlInterceptor} from './url-interceptor';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    TokenStorage
  ],
  declarations: []
})
export class CoreModule {

  // Prevent reimport of the CoreModule
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
