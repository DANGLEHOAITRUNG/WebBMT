// add-product.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  brandId: number | null = null;
  categoryId: number | null = null;
  price: number | null = null;
  quantity: number | null = null;
  imageUrl: string = '';

  constructor(private productService: ProductService) {}

  addProduct(): void {
    // Kiểm tra giá trị nhập vào
    if (!this.productName || !this.categoryId || this.price === null || this.quantity === null) {
      alert('Vui lòng nhập đầy đủ thông tin bắt buộc!');
      return;
    }

    const product = {
      productName: this.productName.trim(),
      brandId: this.brandId,
      categoryId: this.categoryId,
      price: this.price,
      quantity: this.quantity,
      imageUrl: this.imageUrl.trim()
    };

    this.productService.addProduct(product).subscribe({
      error: (error) => {
        alert('Thêm sản phẩm thành công!');
        this.resetForm();
      },
      next: (response) => {
        console.log('Sản phẩm đã được thêm thành công:', response);
      }
    });
  }

  private resetForm(): void {
    this.productName = '';
    this.brandId = null;
    this.categoryId = null;
    this.price = null;
    this.quantity = null;
    this.imageUrl = '';
  }
}