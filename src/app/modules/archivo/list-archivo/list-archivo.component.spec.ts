import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArchivoComponent } from './list-archivo.component';

describe('ListArchivoComponent', () => {
  let component: ListArchivoComponent;
  let fixture: ComponentFixture<ListArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArchivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
