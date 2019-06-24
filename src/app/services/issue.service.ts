import { Injectable } from '@angular/core';
import { Issue } from '../models/Issue';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import {DateTime} from 'luxon';
import { Page } from '../models/Page';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  url = "https://api.github.com/repos/angular/angular/issues"

  constructor(private httpClient: HttpClient) { }

  findAll(date: string, page: string): Observable<Issue[]> {
    
    return this.httpClient.get<Issue[]>(`${this.url}?since=${date}&page=${page}`)
  }

  findById(id: string): Observable<Issue> {

    return this.httpClient.get<Issue>(`${this.url}/${id}`)
  }
}
