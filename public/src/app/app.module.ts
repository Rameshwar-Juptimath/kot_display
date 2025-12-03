import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppService } from './appservice.service';
import{ ROUTES } from './app.route';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KotComponent } from './kot/kot.component';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: false})
  ],
  providers: [AppService,{provide: 'apiBase', useValue:''},AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
