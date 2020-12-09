import { Component, Input, OnInit } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MediaActionService } from '../media-action.service';
import { List } from '../store/list.actions';
import { ListState } from '../store/list.state';
import { ListPageState, ListSelector } from '../store/substates';

let styleUrls = ['./media-list.component.scss']

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: [
    ...styleUrls
  ]
})
export class MediaListComponent implements OnInit {

  @Select(ListSelector.isLoading) isLoading$: Observable<boolean>;
  @Select(ListSelector.listItems) listItems$: Observable<Array<any>>;


  mediaList = [{
    image: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg',
    name: 'Bis Free',
    information: 'Bis',
    isObituary: true,
    isMinneside: true,
    isFlowers: true,
    isMemory: true
  },
  {
    image: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg',
    name: 'Bis Free',
    information: 'Bryne',
    isObituary: false,
    isMinneside: true,
    isFlowers: false,
    isMemory: true
  },
  {
    image: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-image_1263411.jpg',
    name: 'Bis Free',
    information: 'Logi Tech',
    isObituary: true,
    isMinneside: false,
    isFlowers: false,
    isMemory: false
  }];

  color: string;
  secondaryServiceColor: string;

  @Input()
  get mainColor() {return this._mainColor;}
  set mainColor(mainColor: string) {
    this.color =  `btn-${mainColor}`;
  }
  private _mainColor: string;
 
  @Input()
  get secondaryColor() {return this._secondaryColor;}
  set secondaryColor(secondaryColor: string) {
    this.secondaryServiceColor = `btn-${secondaryColor}`;
  }
  private _secondaryColor: string;

  constructor(service: MediaActionService, private store: Store) {
    service.mainColor.subscribe(color => {
      this.color = `btn-${color}`;
    });

    service.secondaryColor.subscribe(color => {
      this.secondaryColor = `btn-${color}`;
    });

    this.listItems$.subscribe(items => console.log(items));
  }

  ngOnInit() {}

  selectBloster() {
    this.store.dispatch(new List.GetList());
  }
}
