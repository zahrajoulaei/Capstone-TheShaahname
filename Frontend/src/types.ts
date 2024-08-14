// Define the Character interface, representing the structure of a character object

import { Key } from "react";

export interface Character {
    _id: Key | null | undefined;
    id: number;
    name: string;
    children?: string[];
    monarchy: string;
    age: number | string;
    abilities: string[];
    specialty: string;
  }