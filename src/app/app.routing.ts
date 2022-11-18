
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { DepartamentosComponent } from "./components/departamentos/departamentos.component";
import { InsertardepartamentoComponent } from "./components/insertardepartamento/insertardepartamento.component";
import { EditdepartamentoComponent } from "./components/editdepartamento/editdepartamento.component";
const appRoutes: Routes=[
    {path: "", component: DepartamentosComponent},
    {path: "insertar", component: InsertardepartamentoComponent},
    {path: "edit/:numero/:nombre/:localidad", component: EditdepartamentoComponent},
    {path: "delete/:id", component: DepartamentosComponent}
]


export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

