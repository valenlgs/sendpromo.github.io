
import { DJEntry, PromoData } from './types';

export const DJ_DATABASE: DJEntry[] = [
  { name: "SKVPS", email: "skvpsmusic@gmail.com" },
  { name: "Promo Target", email: "email@email.com" }
];

export const INITIAL_PROMO_DATA: PromoData = {
  artistNames: '',
  trackName: '',
  mixType: '',
  genres: '',
  label: '',
  bpm: '',
  trackLink: '',
  description: '',
  personalName: '',
  location: ''
};
