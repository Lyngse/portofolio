import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ShadowsComponent } from './shadows/shadows.component';
import { GeneralClassesComponent } from './general-classes/general-classes.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputsComponent } from './inputs/inputs.component';
import { SidemenusComponent } from './sidemenus/sidemenus.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { SlidersComponent } from './sliders/sliders.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ModalComponent } from './modal/modal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full'},
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'headers', component: HeaderComponent },
  { path: 'footers', component: FootersComponent},
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'shadows', component: ShadowsComponent },
  { path: 'generalclasses', component: GeneralClassesComponent},
  { path: 'socialmedia', component: SocialMediaComponent},
  { path: 'tabs', component: TabsComponent},
  { path: 'inputs', component: InputsComponent},
  { path: 'sidemenus', component: SidemenusComponent},
  { path: 'spinners', component: SpinnersComponent},
  { path: 'sliders', component: SlidersComponent},
  { path: 'modal', component: ModalComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadersComponent,
    FootersComponent,
    ButtonsComponent,
    CardsComponent,
    ShadowsComponent,
    GeneralClassesComponent,
    SocialMediaComponent,
    TabsComponent,
    InputsComponent,
    SidemenusComponent,
    SpinnersComponent,
    SlidersComponent,
    FrontpageComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
