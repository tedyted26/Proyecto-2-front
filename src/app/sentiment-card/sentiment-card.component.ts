import { Component, OnInit , Input, SimpleChange} from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.scss']
})
export class SentimentCardComponent implements OnInit {
  @Input()
  data_busqueda: Data;

  

  constructor() {}

  ngOnInit(): void {

  }
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {
      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);
      this.data_busqueda = JSON.parse( curVal);

      console.log(this.data_busqueda)
    }
  }

}
