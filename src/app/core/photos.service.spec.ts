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
    service.getNaturePhotos('goats').subscribe(value => {
      expect(value).toContain('photos');
    });
  });
});
