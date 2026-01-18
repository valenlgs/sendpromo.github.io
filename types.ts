
export interface PromoData {
  artistNames: string;
  trackName: string;
  mixType: string;
  genres: string;
  label: string;
  bpm: string;
  trackLink: string;
  description: string;
  personalName: string;
  location: string;
}

export interface DJEntry {
  name: string;
  email: string;
}

export type ValidationErrors = Partial<Record<keyof PromoData, boolean>>;
