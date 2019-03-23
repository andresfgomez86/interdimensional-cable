import { Episode } from './episode';
export class EpisodeResponse {
    info: {
        count: number,
        pages: number,
        next: String,
        prev: String
    };
    results: Episode[];
}