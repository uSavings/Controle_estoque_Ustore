import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private router: Router) { }

  redirectToAddProduto() {
    this.router.navigate(['/form-produto']);
  }
}
