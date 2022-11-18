import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'src/app/services/departamentos.services.service';
import { Departamento } from 'src/app/models/departamento';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  loadDepartamentos() : void{
    this._service.getDepartamentos().subscribe(response =>{
      this.departamentos = response;

    });
  }

  deleteDepartamento(id: number):void {
    this._service.delete(id.toString()).subscribe(response =>{
      this.loadDepartamentos();

    });
  }


  constructor(
    private _service: DepartamentosService,
    private _activeRoutes: ActivatedRoute
    )

   { }

  ngOnInit(): void {

    //PARA EL DELETE EN ROUTER LINK
    this._activeRoutes.params.subscribe((params: Params) =>{
      if (params['id'] != null){
        var id = parseInt(params['id']);
        this.deleteDepartamento(id);
      }
    })

    this.loadDepartamentos();
  }
}
