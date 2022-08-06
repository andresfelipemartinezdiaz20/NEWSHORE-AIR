import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { HttpClientModule} from '@angular/common/http';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { OriginPipe } from './origin.pipe';
import { FormsModule } from '@angular/forms';
import { DestinationPipe } from './destination.pipe';
import { HeaderComponent } from './header/header.component';
import { CurrencyChangePipe } from './currency-change.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    OriginPipe,
    DestinationPipe,
    HeaderComponent,
    CurrencyChangePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
