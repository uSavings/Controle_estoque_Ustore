import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produtos',
  templateUrl: './add-produtos.component.html',
  styleUrls: ['./add-produtos.component.css']
})
export class AddProdutosComponent {

  constructor(private router: Router) { }

  redirectToForm() {
    this.router.navigate(['/form-produto']);
  }
}
