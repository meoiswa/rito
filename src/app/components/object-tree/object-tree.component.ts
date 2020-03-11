import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-tree',
  templateUrl: './object-tree.component.html',
  styleUrls: ['./object-tree.component.css']
})
export class ObjectTreeComponent implements OnInit {

  @Input() object: any;
  @Input() key: string;

  constructor() { }

  ngOnInit(): void {
  }

  get value() {
    if (this.object === null) {
      return 'null';
    } else if (this.object === undefined) {
      return 'undefined';
    } else if (typeof (this.object) === 'object') {
      return typeof (this.object);
    } else {
      return this.object.toString();
    }
  }

  trackByFn(index, item) {
    return item.key;
  }
}
