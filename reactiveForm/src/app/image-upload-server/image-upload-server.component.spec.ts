import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadServerComponent } from './image-upload-server.component';

describe('ImageUploadServerComponent', () => {
  let component: ImageUploadServerComponent;
  let fixture: ComponentFixture<ImageUploadServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploadServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
