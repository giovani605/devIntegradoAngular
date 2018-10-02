import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPaginaComponent } from './nova-pagina.component';

describe('NovaPaginaComponent', () => {
  let component: NovaPaginaComponent;
  let fixture: ComponentFixture<NovaPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
