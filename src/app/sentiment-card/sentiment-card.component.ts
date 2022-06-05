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

  n_tweets = 0
  polaridad = 0.
  subjetividad = 0.

  constructor() {}

  ngOnInit(): void {

  }
  set_variables(){
    this.n_tweets = this.data_busqueda["twitter"]["numero_tweets"]
    this.polaridad = this.data_busqueda["twitter"]["polaridad"]
    this.subjetividad = this.data_busqueda["twitter"]["subjetividad"]
  }
  
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {

      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);
      console.log(curVal)
      if (curVal){
        this.data_busqueda = JSON.parse( curVal);
        this.set_variables()
      }
      else
        console.log("Valor indefinido")

      
    }
  }

}
