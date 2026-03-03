import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conteiner } from './conteiner';

describe('Conteiner', () => {
  let component: Conteiner;
  let fixture: ComponentFixture<Conteiner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conteiner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conteiner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
