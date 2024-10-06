import { Content } from "@/interface/Content";
import { UUID } from "crypto";

export class ContentAPI {
    static async updateContent(
        fileId: UUID,
        content: Content,
    ) {
        console.log('save file', fileId, content)
    }
}