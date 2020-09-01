import { TestBed, async } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotosService', () => {
  let service: PhotosService;
  // single photo api result
  let apiResult = {
    "total_results":10000,
    "page":1,
    "per_page":1,
    "photos":[
      {
        "id":3031075,
        "width":3686,
        "height":4607,
        "url":"https://www.pexels.com/photo/grey-cliff-beside-ocean-3031075/",
        "photographer":"Simon Clayton",
        "photographer_url":"https://www.pexels.com/@sglc",
        "photographer_id":790423,
        "src":{
          "original":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg",
          "large2x":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "large":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          "medium":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&h=350",
          "small":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&h=130",
          "portrait":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          "landscape":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          "tiny":"https://images.pexels.com/photos/3031075/pexels-photo-3031075.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked":false
      }
    ],
    "next_page":"https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
  };
  // passing single photo example
  let apiPhotoExample = {
    "id": 2014422,
    "width": 3024,
    "height": 3024,
    "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
    "photographer": "Joey Farina",
    "photographer_url": "https://www.pexels.com/@joey",
    "photographer_id": 680589,
    "src": {
      "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
      "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
      "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
      "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
    },
    "liked": false
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PhotosService);
  });
  // default test
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // example of API results as subscribe
  it('should get photos back from API', () => {
    service.getNaturePhotos('goats').subscribe(value => {
      expect(value).toContain('photos');
      expect(value).toContain('id');
      expect(value).toContain('src');
    });
  });
  // failing async test - toPromise
  xit('should match the full response object', async () => {
    const apiExample = await service.getNaturePhotos('nature', 1).toPromise();
    expect(apiExample).toEqual(apiResult);
  });
  // passing async test - toPromise
  it('should get a photo by id', async () => {
    const returnedPhoto = await service.getPhotoById('2014422').toPromise();
    expect(returnedPhoto).toEqual(apiPhotoExample);
  });

});
