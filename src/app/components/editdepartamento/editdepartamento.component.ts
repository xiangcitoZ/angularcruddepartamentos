import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentosService } from 'src/app/services/departamentos.services.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdepartamento',
  templateUrl: './editdepartamento.component.html',
  styleUrls: ['./editdepartamento.component.css']
})
export class EditdepartamentoComponent implements OnInit {
  public departamento!: Departamento;

  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;

  constructor(
      private _service: DepartamentosService,
      private _activeRoute: ActivatedRoute,
      private _router: Router
    ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var num = parseInt(params['numero']);
      this.departamento = new Departamento(num,
        params["nombre"], params["localidad"]);

        });
      }
    
    updateDepartamento(): void{
        var nombre = this.cajaNombre.nativeElement.value; 
        var localidad = this.cajaLocalidad.nativeElement.value; 
        //MODIFICAMOS LOS DATOS DEL DEPARTAMENTO
        //CON LOS DATOS DE LAS CAJAS

        this.departamento.nombre = nombre;
        this.departamento.localidad = localidad;
        this._service.update(this.departamento).subscribe(response => {
          this._router.navigate(["/"]);
        });
      }
    }
    
