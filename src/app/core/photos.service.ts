import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getNaturePhotos(searchTerms) {
    return this.http.get(`https://api.pexels.com/v1/search?query=${searchTerms}&per_page=30`, {
      headers: { Authorization: '563492ad6f91700001000001dbf0bf5a08e44e5f94b973115f8c3051' }
    })
  }
}
