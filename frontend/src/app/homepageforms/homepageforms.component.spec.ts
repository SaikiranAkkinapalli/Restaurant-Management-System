import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageformsComponent } from './homepageforms.component';

describe('HomepageformsComponent', () => {
  let component: HomepageformsComponent;
  let fixture: ComponentFixture<HomepageformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
