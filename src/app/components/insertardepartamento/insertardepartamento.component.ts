import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insertardepartamento',
  templateUrl: './insertardepartamento.component.html',
  styleUrls: ['./insertardepartamento.component.css']
})
export class InsertardepartamentoComponent implements OnInit {
  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
    private _service: DepartamentosService,
    private _router: Router
  ) { }

  insertarDepartamento(): void{
    var num = parseInt(this.cajaNumero.nativeElement.value); 
    var nom = this.cajaNombre.nativeElement.value; 
    var loc = this.cajaLocalidad.nativeElement.value;  
    var newDept = new Departamento(num , nom, loc);
    this._service.create(newDept).subscribe(response =>{
      this._router.navigate(["/"]);
      
    });

  }

  ngOnInit(): void {
  }

}
