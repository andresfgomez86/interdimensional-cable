import { Location } from './location';
export class LocationResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Location[];
}