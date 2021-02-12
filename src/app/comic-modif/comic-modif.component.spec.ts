import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicModifComponent } from './comic-modif.component';

describe('ComicModifComponent', () => {
  let component: ComicModifComponent;
  let fixture: ComponentFixture<ComicModifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicModifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
