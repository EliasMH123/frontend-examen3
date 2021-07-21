import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchivoService } from '../service/archivo.service';
import { AuthService } from '../../login/service/auth.service';
import { AddArchivoComponent } from '../add-archivo/add-archivo.component';
@Component({
  selector: 'app-list-archivo',
  templateUrl: './list-archivo.component.html',
  styleUrls: ['./list-archivo.component.css']
})
export class ListArchivoComponent implements OnInit {
  constructor(private archivoService:ArchivoService,private dc: ChangeDetectorRef, public dialog: MatDialog, private authService:AuthService ) { }
    archivos:any;
    iduser:any;
    ngOnInit(): void {
      this.iduser = this.authService.usuario.idusuario;
      this.listArchivos();
    }
    listArchivos():void{
      this.archivoService.listArchivos(this.iduser).subscribe(data=>{
        this.archivos = data;
        console.log(this.archivos)
        this.dc.detectChanges();
      })
    }
  
    openDialog():void{
      const dialogRef = this.dialog.open(AddArchivoComponent,{});
      dialogRef.afterClosed().subscribe(res=>{
        this.listArchivos();
      })
    }
  
    abrirNuevoTab(link: any) {
      // Abrir nuevo tab
      let win = window.open(link, '_blank')!;
      // Cambiar el foco al nuevo tab (punto opcional)
      win.focus();
    }
  
    delete(num: number) {
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
            'El registro ha sido eliminado.',
            'success'
          )
          this.archivoService.delArchivo(num).subscribe(
            res => {
              this.listArchivos();
            }
          )
        }
      })
    }
}
