import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/Issue';

class MockIssueService {

  findAll(date: string ,page: string):Observable<Issue[]>{

    return Observable.create([
      {
        id: 1,
        number: 10000,
        title: "Major Bug",
        body: "There's a major bug here",
        user: {
          id: 1,
          login:"userA"
        },
        assignee: {
          id: 2,
          login:"userB"
        }
      },
      {
        id: 2,
        number: 10001,
        title: "Why does this do that",
        body: "Why does this do that",
        user: {
          id: 3,
          login:"userC"
        },
        assignee: {
          id: 4,
          login:"userD"
        }
      },
      {
        id: 3,
        number: 10002,
        title: "Null Pointer Exception here",
        body: "There's a Null Pointer exception when i do this",
        user: {
          id: 5,
          login:"userD"
        },
        assignee: {
          id: 6,
          login:"userF"
        }
      }
    ]);
  }

  findById(id: number){

    return Observable.create(
      {
        id: 1,
        number: 10000,
        title: "Major Bug",
        body: "There's a major bug here",
        user: {
          id: 1,
          login:"userA"
        },
        assignee: {
          id: 2,
          login:"userB"
        }
      }
    );
  }
}

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
