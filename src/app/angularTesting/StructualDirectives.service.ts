import { Injectable } from '@angular/core';

@Injectable()

export class StructualDirectivesService {

    getVehicles() {
        return [
            {name: 'car', seats: 4},
            {name: 'bike', seats: 4},
            {name: 'truck', seats: 4}
        ];
    }
};
