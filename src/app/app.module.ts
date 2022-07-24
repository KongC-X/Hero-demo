import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForComponent } from './components/for/for.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferPanelComponent } from './components/transfer/transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import { TplOutletComponent } from './components/tpl-outlet/tpl-outlet.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { SexReformPipe } from './pipes/sex-reform.pipe';
import { TransferComponent } from './components/transfer/transfer.component';
import { TestRxComponent } from './components/test-rx/test-rx.component';
import { HeroListComponent } from './router-study/heroes/hero-list/hero-list.component';
import { CrisisListComponent } from './router-study/crisis-center/crisis-list/crisis-list.component';
import { NotFoundComponent } from './router-study/not-found/not-found.component';
import { HeroesModule } from './router-study/heroes/heroes.module';
import { CrisisCenterModule } from './router-study/crisis-center/crisis-center.module';
import { NameEditorComponent } from './form-study/name-editor/name-editor.component';
import { ProfileEditorComponent } from './form-study/reactiveForm/profile-editor/profile-editor.component';
import { EqualValidatorDirective } from './form-study/equal-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForComponent,
    TransferPanelComponent,
    LayoutComponent,
    HerosComponent,
    TplOutletComponent,
    ViewChildComponent,
    PipeComponent,
    SexReformPipe,
    TransferComponent,
    TestRxComponent,
    // HeroListComponent,
    // CrisisListComponent,
    NotFoundComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule, // AppRoutingModule 位于 HeroesModule 和 CrisisCenterModule 之后，注意顺序
    // RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
