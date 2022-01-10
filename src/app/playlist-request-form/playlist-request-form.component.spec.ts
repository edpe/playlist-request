import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistRequestFormComponent } from './playlist-request-form.component';

describe('PlaylistRequestFormComponent', () => {
  let component: PlaylistRequestFormComponent;
  let fixture: ComponentFixture<PlaylistRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
