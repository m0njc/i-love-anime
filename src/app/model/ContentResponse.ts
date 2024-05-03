import { Paginator } from "./Paginator";

export interface Media {
    id: number;
    title: {
        english: string;
    };
    description: string;
    coverImage: {
        extraLarge: string;
    };
    siteUrl: string;
}


export interface ContentResponse {
    Page: {
        pageInfo: Paginator;
        media: Media[];
    
    }
}
