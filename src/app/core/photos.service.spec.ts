import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotosService', () => {
  let service: PhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data back from service', () => {
    const fixture = TestBed.createComponent(PhotosService);
    let component = fixture.componentInstance;
    expect(component.getNaturePhotos('goats')).toContain('photos');
  });
});
