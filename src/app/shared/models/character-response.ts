import { Character } from './character';
/**
 * This is the structure of the API response for the Characters endpoint
 *
 * @export
 * @class CharacterResponse
 */
export class CharacterResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Character[];
}