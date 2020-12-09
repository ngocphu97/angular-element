import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MediaActionService } from '../media-action.service';

@Component({
  selector: 'app-media-action',
  templateUrl: './media-action.component.html',
  styleUrls: ['./media-action.component.scss']
})
export class MediaActionComponent implements OnInit {

  mainColor: string = "primary";
  secondaryColor: string = "primary";

  constructor(private actionService: MediaActionService) { 
    this.actionService.mainColor.subscribe(color => this.mainColor = color);
    this.actionService.secondaryColor.subscribe(color => this.secondaryColor = color);
  }

  ngOnInit(): void { }

  setupMainColor(color: string) {
    this.actionService.setColor(color);
  }

  setupSecondaryColor(color: string) {
    this.actionService.setupSecondaryColor(color);
  }

}
