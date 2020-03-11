import { Component, OnInit } from '@angular/core';
import { LiveGameService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  liveGameStats$: Observable<any>;

  constructor(private liveGameService: LiveGameService) {
  }

  ngOnInit() {
    this.liveGameStats$ = this.liveGameService.getLiveGameStats();
  }

}
