import { Component, OnInit } from '@angular/core';
import {PhotosService } from './core/photos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lazyLoad';
  photos$;
  searchForm: FormGroup;

  constructor(
    private photoService: PhotosService,
    private fb:FormBuilder
  ) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerms: ['goats', [Validators.required]]
    });
    this.searchForm.valueChanges.subscribe();
  }

  doSearch() {
    this.photoService.getNaturePhotos(this.searchForm.value.searchTerms.toLowerCase()).subscribe((data) => {
      this.photos$ = data;
    });
  }

  get searchTerms() { return this.searchForm.get('searchTerms'); }
}
