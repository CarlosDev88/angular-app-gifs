import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {
  constructor(private gifservice: GifsService) {}

  get resultados(): Gif[] {
    return this.gifservice.resultados;
  }
}
