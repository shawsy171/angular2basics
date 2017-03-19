import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { StructualDirectivesComponent } from './structualDirectives.component';
import { StructualDirectivesService } from './StructualDirectives.service';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ StructualDirectivesComponent ],
    providers: [ StructualDirectivesService ],
    exports: [ StructualDirectivesComponent ]
})

export class StructualDirectivesModule {}
