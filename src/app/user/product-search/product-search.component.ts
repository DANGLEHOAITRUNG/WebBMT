import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css'
})
export class ProductSearchComponent implements OnInit {
  // Danh sách sản phẩm
  products: any[] = [];
  productList: any[] = [];
  searchQuery: string = '';  // Biến để lưu giá trị từ ô tìm kiếm

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();  // Lấy sản phẩm khi component được khởi tạo
  }

  // Hàm để gọi API và lấy danh sách sản phẩm
  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        this.productList = data; // Gán dữ liệu trả về vào filteredProducts ban đầu
      },
      (error) => {
        console.error('Lỗi khi lấy sản phẩm', error);
      }
    );
  }

  // Hàm tìm kiếm sản phẩm
  search(query: string): void {
    if (query && query.trim()) {
      this.productList = this.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())  // Tìm kiếm không phân biệt chữ hoa chữ thường
      );
    } else {
      this.productList = this.products; // Nếu không có từ khóa tìm kiếm, hiển thị toàn bộ sản phẩm
    }
  }
}
