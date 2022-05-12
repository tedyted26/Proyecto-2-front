import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sentiment-title',
  templateUrl: './sentiment-title.component.html',
  styleUrls: ['./sentiment-title.component.scss']
})
export class SentimentTitleComponent implements OnInit {

  array_prueba: string[] = ['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red'];

  control = new FormControl();
  filArray!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    //o aqui (api)
    this.filArray = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(val => this._filter(val))
    );
  }

  private _filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();
//si hay llamada a api para pillar los autocompletados hay que pillarlos aqui
    return this.array_prueba.filter(palabra => palabra.toLocaleLowerCase().indexOf(formatVal) === 0);
  }

}
