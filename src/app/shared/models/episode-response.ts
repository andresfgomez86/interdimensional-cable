import { Episode } from './episode';
/**
 * This is the structure of the API response for the Episodes endpoint
 *
 * @export
 * @class EpisodeResponse
 */
export class EpisodeResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Episode[];
}