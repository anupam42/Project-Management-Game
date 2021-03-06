import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './views/home/home-menu/home-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { PlayerComponent } from './views/game/player/player.component';
import { StartDialogComponent } from './start-dialog/start-dialog.component';
import { AboutComponent } from './views/about/about.component';
import { RulesComponent } from './views/rules/rules.component';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { CanDeactivateGuard } from './shared/canDeactivate.class';
import { RouterStateSnapshot, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    FooterComponent,
    HomeMenuComponent,
    GameComponent,
    PlayerComponent,
    StartDialogComponent,
    AboutComponent,
    RulesComponent,
    WinnerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CanDeactivateGuard],
  entryComponents: [StartDialogComponent, WinnerDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
