import { Pokemon } from "./pokemon";

export class PokemonImpl implements Pokemon {
  nombre: string;
  url: string;


constructor(name: any, url: any) {
  this.nombre = name;
  this.url = url
}

getId(url: string): string {
  url = url.slice(0, url.length - 1)
  return url.slice(url.lastIndexOf('/') + 1, url.length);
}

}

