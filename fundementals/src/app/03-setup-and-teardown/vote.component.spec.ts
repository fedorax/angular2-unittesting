import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  
  let component :VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });
    
  
  it('should increment the vote', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);

  });

  it('should dec the vote', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});