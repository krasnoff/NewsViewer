export interface NewsData {
    status: string,
    totalResults: number,
    articles: Articles[]
}

export interface Articles {
    author: string,
    content: string,
    description: string,
    publishedAt: Date,
    source: Source,
    title: string
    url: string,
    urlToImage: string
}

export interface Source {
    id: string,
    name: string
}