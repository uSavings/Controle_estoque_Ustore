import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaProdutosComponent } from './deleta-produtos.component';

describe('DeletaProdutosComponent', () => {
  let component: DeletaProdutosComponent;
  let fixture: ComponentFixture<DeletaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
