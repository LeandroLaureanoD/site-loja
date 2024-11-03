import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        ComponentesRoutingModule 
    ]
})
export class ComponentesModule { }
