import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterBasicHighlightDirective } from './directives/better-basic-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterBasicHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
