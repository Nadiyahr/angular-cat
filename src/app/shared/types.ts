export interface Breed {
  weight: {
    imperial: string;
    metric: string
  };
  id: string;
  reference_image_id: string;
  name: string;
  cfa_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span:string;
  indoor: number;
  lap:number;
  alt_names: string | null;
  adaptability: number;
  affection_level:number;
  child_friendly:number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs:number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  hypoallergenic: number;
  short_legs: number;
  wikipedia_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  image: {
    id: string;
    width: number;
    height: number
    url: string;
  }
}

export interface CatImg {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[];
  favourite: { [key: string]: string };
}

export interface SelectList {
  id: string;
  name: string;
}
