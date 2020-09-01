import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // import items used in component
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  // default test
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  // default test
  it(`should have as title 'lazyLoad'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('lazyLoad');
  });
  // Test element is rendering on page
  it('should render page header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Lazy Loading Demo');
  });

  xit('should do a search', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let searchField = app.searchForm.controls['searchTerms'];

    searchField.setValue('goats');
    expect(searchField.value).toEqual('goats');
    await app.doSearch();
    let testPhotos = app.photos;
    console.log(testPhotos);
    expect(testPhotos).toContain('photos');
  })
});
