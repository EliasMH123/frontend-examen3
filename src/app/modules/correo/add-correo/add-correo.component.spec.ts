import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorreoComponent } from './add-correo.component';

describe('AddCorreoComponent', () => {
  let component: AddCorreoComponent;
  let fixture: ComponentFixture<AddCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
