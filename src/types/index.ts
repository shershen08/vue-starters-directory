
export interface ListItem {
    published: boolean;
    title: string;
    repo: string;
    link: string;
    owner: string;
    stars: number;
    features: string[];
}


export interface FilterItem {
    name: string;
    active: boolean;
}

export interface SearchState {
    text: string;
    tags: string[];
}
