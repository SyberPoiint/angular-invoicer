import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../document.model';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html'
})
export class DocumentItemComponent implements OnInit {
  @Input() document: Document;
  @Input() index: number;

  ngOnInit() {}
}
