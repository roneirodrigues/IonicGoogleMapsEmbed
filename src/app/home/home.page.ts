import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  urlGoogleMaps;
  urlGoogleMapsTrust;
  selectedIndex;
  keyGooleMap = '(ENTER YOUR KEY HERE)';
  varCity = 'Vila Madalena,São Paulo';
  varZoom = '13';

  associacoes = [
    { associacao: 'AACD', auxilo: 1.351, regiao: 'Vila Maria, São Paulo, Brasil', selected: 'true' },
    { associacao: 'Mãos Que Ajudam', auxilo: 800, regiao: 'Vila Matilde, São Paulo, Brasil', selected: 'false' },
    { associacao: 'Cotolengo', auxilo: 2.542, regiao: 'Penha, São Paulo, Brasil', selected: 'false' },
    { associacao: 'Pestalozzi', auxilo: 151, regiao: 'Vila Madalena, São Paulo, Brasil', selected: 'false' },
  ];



  constructor(
    private sanitizer: DomSanitizer
  ) { }



  ngOnInit() {
    this.updateMap();
  }
  updateMap() {
    this.urlGoogleMaps = `https://www.google.com/maps/embed/v1/place?key=${this.keyGooleMap}&q=${this.varCity}&zoom=${this.varZoom}`;
    this.urlGoogleMapsTrust = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlGoogleMaps);
  }

  altAssoc(item) {

    this.associacoes.map(e => e.selected = 'false');
    this.associacoes[item.detail.value].selected = 'true';
    this.varCity = this.associacoes[item.detail.value].regiao;
    this.updateMap();
  }
}
