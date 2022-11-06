export type Character = {
    name: string;
    status: string,
    image: string;
    gender: string;
    species: string;
    created: string;
    origin: {
        name: string;
        url: string
    };
    location: {
        name: string;
        url: string
    };
    episode: string[];
    id: number;
    type: string;
    url: string;
}