import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillchoiceComponent } from './skillchoice.component';

describe('SkillchoiceComponent', () => {
  let component: SkillchoiceComponent;
  let fixture: ComponentFixture<SkillchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillchoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
