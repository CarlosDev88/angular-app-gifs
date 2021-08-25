import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  buscar(item: string) {
    this.gifService.buscarGifts(item);
  }

  get historial() {
    return this.gifService.historial;
  }
}
