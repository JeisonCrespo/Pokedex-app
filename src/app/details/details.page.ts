import { Component } from '@angular/core';
import { Pokemon } from '../shared/interfaces/pokemon.interfaces';
import { PokedexServicesService } from '../core/services/pokedex-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  public pokemon: Pokemon;
  public segment: string = 'stats';

  constructor(
    private pokedexServicesService: PokedexServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const pokemonId = params.pokemonId - 1;
      this.pokemon = this.pokedexServicesService.getPokemon(pokemonId);
    });
  }

  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
