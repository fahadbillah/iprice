import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ FormsModule ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'iprice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('iprice');
  });

  it(`should make 'testing' uppercase 'TESTING'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.makeUppercase('testing');
    expect(app.showUpperCase).toBe('TESTING');
  });

  it(`should make 'testing' alterCase to 'TeStInG'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.makeAltercase('testing');
    expect(app.showAlterCase).toBe('TeStInG');
  });

  it(`should make 'hello world' to blob 'blob:http...'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.makeCSV('hello world');
    fixture.detectChanges();
    const debugEl = fixture.debugElement;

    const href = debugEl.query(By.css('a')).nativeElement.getAttribute('href');
    console.log('%%%%%%%%%%%%', href);
    expect(href).toContain('blob:http');
  });
});
