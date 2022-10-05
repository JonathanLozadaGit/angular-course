
interface Data {
    name: string,
    url: string
}

export interface EpisodeResponse {
    air_date:   string;
    characters: string[];
    created:    Date;
    episode:    string;
    id:         number;
    name:       string;
    url:        string;
}

export interface CharactersResponse {
    info:    Info;
    results: Character[];
   }
   
   export interface Info {
    count: number;
    next:  string;
    pages: number;
    prev:  null;
   }
   
   export interface Character {
    created:  Date;
    episode:  string[];
    gender:   Gender;
    id:       number;
    image:    string;
    location: Location;
    name:     string;
    origin:   Location;
    species:  string;
    status:   string;
    type:     string;
    url:      string;
   }
   
   export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
   }
   
   export interface Location {
    name: string;
    url:  string;
   }

/* TODO: podemos crear const para valores por defecto
   const DEFAULT_CHARACTER : Character {
        id : 0,
        
    }
   */