
export interface ListItem {
    published: boolean;
    title: string;
    repo: string;
    stars: number;
    features: string[];
}


export interface FilterItem {
    name: string;
    active: boolean;
}
