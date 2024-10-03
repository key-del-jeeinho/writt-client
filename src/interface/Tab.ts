import { DateTime } from "luxon";

export interface Tab {
    id: string;
    name: string;
    ext: string;
    description: string;
    content: string;
    createdAt: DateTime;
    lastModifiedAt: DateTime;
}
