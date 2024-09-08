import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {
  produtoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      nm_produto: ['', Validators.required],
      validade: ['', Validators.required],
      quantidade: [0, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      const produto = this.produtoForm.value;
      console.log('Produto Adicionado:', produto);
      // Lógica para lidar com a submissão do formulário
    }
  }
}
