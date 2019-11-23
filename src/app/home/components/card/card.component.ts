import { Component, OnInit, Input } from '@angular/core';
import { NerbyEntity } from 'src/app/_common/entities/geocode.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() item: NerbyEntity;

  constructor() { }

  ngOnInit() {}

}
