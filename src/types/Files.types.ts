export interface AppFile {
    id: number;
    name: string;
    lastModified: string;
    size: number;
    hash: string;
    contentType?: string;
}
