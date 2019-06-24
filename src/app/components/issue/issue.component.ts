import { Component, OnInit, OnDestroy } from '@angular/core';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from 'src/app/models/Issue';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  id : string

  issue: Issue
  
  constructor(private issueService: IssueService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.id = params['id']

      this.issueService.findById(this.id).subscribe( res => {

        this.issue = res
      })
    })
  }

}
