
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

export interface GlobalFetch {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
  }
