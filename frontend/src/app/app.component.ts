import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

type Product = {
  id?: string,
  name: string,
  expirationDate: string,
  quantity: string
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  url = "http://localhost:3000/products"
  addProductMode = false;
  editProductMode = false;
  editProductId = '';
  products: Product[] = [];
  fieldName = '';
  fieldExpirationDate = '';
  fieldQuantity = '';

  clearFields() {
    this.fieldName = '';
    this.fieldExpirationDate = '';
    this.fieldQuantity = '';
  }

  setAddProductMode(mode: boolean) {
    this.clearFields();
    this.addProductMode = mode;
  }

  setEditProductMode(mode: boolean, id?: string) {
    if (mode === true) {
      const product = this.products.find(product => product.id === id);

      if (product) {
        this.editProductMode = mode;
        this.editProductId = id ?? '';
        this.fieldName = product.name;
        this.fieldExpirationDate = product.expirationDate;
        this.fieldQuantity = product.quantity;
      }
    } else {
      this.clearFields();
      this.editProductMode = mode;
    }
  }

  async addProduct() {
    const product = {
      name: this.fieldName,
      expirationDate: this.fieldExpirationDate,
      quantity: this.fieldQuantity
    };

    try {
      const response = await fetch(this.url,
        { body: JSON.stringify(product), method: 'POST', headers: { 'Content-Type': 'application/json' } });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(JSON.parse(text).message);
      }

      const json = await response.json();

      this.products.push(json);
      this.addProductMode = false;
      this.clearFields();
    } catch (error) {
      alert(error);
    }
  }

  async editProduct(id: string) {
    const product = {
      name: this.fieldName,
      expirationDate: this.fieldExpirationDate,
      quantity: this.fieldQuantity
    };

    try {
      const response = await fetch(`${this.url}/${id}`,
        { body: JSON.stringify(product), method: 'PUT', headers: { 'Content-Type': 'application/json' } });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(JSON.parse(text).message);
      }

      const json = await response.json();
      this.products = this.products.map(product => product.id === id ? json : product);

      this.editProductMode = false;
      this.clearFields();
    } catch (error) {
      alert(error);
    }
  }

  async deleteProduct(id: string | undefined) {
    try {
      if (confirm('Deseja realmente excluir este produto?')) {
        const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
          const text = await response.text();
          throw new Error(JSON.parse(text).message);
        }

        this.products = this.products.filter(product => product.id !== id);
      }
    } catch (error) {
      alert(error);
    }
  }

  async ngOnInit() {
    console.log('AppComponent ngOnInit');

    const url = "http://localhost:3000/products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      this.products = json;
    } catch (error) {
      console.error(error);
    }
  }
}
