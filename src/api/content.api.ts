import { Content } from "@/interface/Content";
import { UUID } from "crypto";

export class ContentAPI {
    static async updateContent(
        fileId: UUID,
        content: Content,
    ) {
        console.log('save file', fileId, content)
    }

    static async updateDescription(
        fileId: UUID,
        description: string,
    ) {
        console.log('save description', fileId, description)
    }

    static async updateName(
        fileId: UUID,
        name: string,
    ) {
        console.log('save name', fileId, name)
    }
}