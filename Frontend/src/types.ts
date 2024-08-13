// Define the Character interface, representing the structure of a character object

export interface Character {
    id: number;
    name: string;
    children?: string[];
    monarchy: string;
    age: number | string;
    abilities: string[];
    specialty: string;
  }