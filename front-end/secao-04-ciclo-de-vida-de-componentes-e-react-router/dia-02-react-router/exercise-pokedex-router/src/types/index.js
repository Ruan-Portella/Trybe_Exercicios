import {
  arrayOf,
  bool,
  number,
  objectOf,
  shape,
  string,
} from 'prop-types';

export const isPokemonFavoriteByIdType = objectOf(bool);

export const pokemonType = shape({
  averageWeight: shape({
    measurementUnit: string,
    value: string,
  }),
  foundAt: arrayOf(shape({
    location: string,
    map: string,
  })),
  id: number,
  image: string,
  moreInfo: string,
  name: string,
  summary: string,
  type: string,
});
