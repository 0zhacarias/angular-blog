import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  templateUrl: './smal-card.component.html',
  styleUrls: ['./smal-card.component.css']
})
export class SmalCardComponent implements OnInit {
@Input()
  fotoCapa:string=""
@Input()
  titulo:string=""
  @Input()
  Id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
