import { Location } from './location';
/**
 *This is the structure of the API response for the Locations endpoint
 *
 * @export
 * @class LocationResponse
 */
export class LocationResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Location[];
}