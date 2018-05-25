/*
    This file imports and exports all the components from Angular Material.
    This is done to keep the import statements in the project to a minimum.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declares the Material Modules we want to use
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule
    ]
})
export class MaterialModule {}