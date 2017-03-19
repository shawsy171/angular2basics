import { Component } from '@angular/core';
import { StructualDirectivesService } from './StructualDirectives.service';

@Component({
    moduleId: module.id,
    selector: 'structual-directive',
    templateUrl: './structualDirectives.template.html'
})

export class StructualDirectivesComponent {
    vehicles: any[] = [];

    constructor(private _sdService: StructualDirectivesService) {

    }

    ngOnInit () {
        this.vehicles = this._sdService.getVehicles();

    }
    // vehicles = [
    //     {name: 'car', seats: 4},
    //     {name: 'bike', seats: 4},
    //     {name: 'truck', seats: 4}
    // ];
};
