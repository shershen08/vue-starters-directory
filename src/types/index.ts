
export interface ListItem {
    published: boolean;
    title: string;
    link: string;
    desc: string;
    stars: number;
    features: string[];
}

export interface SearchState {
    text: string;
    tags: string[];
}
