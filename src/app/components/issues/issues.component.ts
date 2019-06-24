import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/Issue';
import { IssueService } from 'src/app/services/issue.service';
import { DateTimeService } from 'src/app/services/date-time.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  issues: Issue[]

  page: number

  constructor(private issueService: IssueService,
              private dateTimeService: DateTimeService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const date = this.dateTimeService.now().minus({days: 7}).toISO()

    this.route.queryParams.subscribe(queryParam => {

      const page = queryParam['page'] || "1";

      this.page = parseInt(page) as number
        
      this.issueService.findAll(date,page).subscribe(issues => {

        this.issues = issues
      })

    })
  }

  prevPage(){

    if(this.page == 1){
      return null;
    }
    else {

      return this.page - 1;
    }
  }

  nextPage(){

    return this.page + 1;
  }

}
