import { Character } from './character';
export class CharacterResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Character[];
}