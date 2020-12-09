import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ElementService {

  public configSubject = new Subject();

  constructor() { }

  setupConfig(jsonString: string) {
    const config = JSON.parse(jsonString);
    this.configSubject.next(config);
  }
}
