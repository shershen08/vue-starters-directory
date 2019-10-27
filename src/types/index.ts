
export interface ListItem {
    published: boolean;
    title: string;
    repo: string;
    link: string;
    desc: string;
    owner: string;
    stars: number;
    features: string[];
}

export interface SearchState {
    text: string;
    tags: string[];
}
