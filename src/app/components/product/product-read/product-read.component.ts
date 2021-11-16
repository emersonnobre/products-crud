import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmModalComponent } from '../../template/confirm-modal/confirm-modal.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  columnsToDisplay = ['id', 'name', 'price', 'action']
  delete = undefined

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(response => this.products = response)
  }

  deleteProduct(id: string): void {
    const dialogRef = this.dialog.open(ConfirmModalComponent)
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.productService.delete(id).subscribe(() => {
          this.productService.showMessage('Produto deletado')
          setTimeout(() => window.location.reload(), 1000)
        })
      }
      else console.log('cancelando...')
    })
  }

}
