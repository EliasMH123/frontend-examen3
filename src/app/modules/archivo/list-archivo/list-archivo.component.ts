import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchivoService } from '../service/archivo.service';
import { AddArchivoComponent } from '../add-archivo/add-archivo.component';
@Component({
  selector: 'app-list-archivo',
  templateUrl: './list-archivo.component.html',
  styleUrls: ['./list-archivo.component.css']
})
export class ListArchivoComponent implements OnInit {
  archivos: any;

  constructor(private archivoService: ArchivoService, private activatedRoute:ActivatedRoute, public dialog: MatDialog,private dc: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listArchivos();
  }
  listArchivos(): void {
    this.archivoService.getArchivos().subscribe(
      response => {
        this.archivos = response;
        console.log(this.archivos);
        this.dc.detectChanges();
      }
    )
  }
  deleteArchivos(num: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El archivo ha sido eliminado.',
          'success'
        )
        this.archivoService.deleteArchivo(num).subscribe(
          response => {
            console.log(response)
            this.listArchivos();
          }
        )
      }
    })
  }
  openAddArchivos():void{
    const dialogRef=this.dialog.open(AddArchivoComponent,{});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.listArchivos();
    });
  }
}
