import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCartaoComponent } from './pagina-cartao.component';

describe('PaginaCartaoComponent', () => {
  let component: PaginaCartaoComponent;
  let fixture: ComponentFixture<PaginaCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
