import  { TestBed, ComponentFixture } from '@angular/core/testing';
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
    
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    //Setup

    //make an instance of the votercomponent.
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;


  });

  it('should render the total votes {{totalVotes}}', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));

    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBe('21');

  });

  it ('should highlight the upvote button if I have upvoted - Check for a class exists', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();

  });

  it ('event binding - should increase total votes when click the vote button', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    //click the button
    button.triggerEventHandler('click', null);
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });
});
