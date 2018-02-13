import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ApiService } from '../api.service';
import { StylesComponent } from './styles.component';

describe('StylesComponent', () => {
  let component: StylesComponent;
  let fixture: ComponentFixture<StylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StylesComponent],
      imports: [
        HttpModule,
      ],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should List Style: British Ale', () => {

    fixture.detectChanges();
    console.log('component', component);
    console.log('styles', component.styles);

    expect(component.styles[0].category.name).toEqual('British Origin Ales');
  });
});
