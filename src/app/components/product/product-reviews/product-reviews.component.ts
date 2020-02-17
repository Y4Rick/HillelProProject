import { Component, OnInit, Inject } from '@angular/core';
import { GlobalService } from '../../../services/global/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.scss']
})
export class ProductReviewsComponent implements OnInit {
  
  get product() {
    return this.globalSevice.product;
  }
  constructor(
    private globalSevice: GlobalService,
    public dialog: MatDialog,
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductRewiewsDialogComponent, {
      width: '500px',
      data: this.product,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.addReview(this.product, result).subscribe(resolve => {
          if (resolve) {
            this.globalSevice.product = resolve;
          }
        })
      }
    });
  }
}

@Component({
  selector: 'app-product-reviews-dialog',
  templateUrl: './product-reviews-dialog.component.html',
  styleUrls: ['./product-reviews.component.scss'],
})
export class ProductRewiewsDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductRewiewsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ) {
    this.form = this.fb.group({
      first: ['', [Validators.required]],
      second: ['', [Validators.required]],
      date: moment().format('DD.MM.YYYY'),
      massage: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {

      const data = {
        date: this.form.get('date').value,
        auth: {
          first: this.form.get('first').value,
          second: this.form.get('second').value,
        },
        massage: this.form.get('massage').value,
      }

      this.dialogRef.close(data);
    }
  }
}

