import { Content } from "@/interface/Content";
import { File } from "@/interface/File";
import { UUID } from "crypto";

export class FileAPI {
    static async findById(fileId: UUID): Promise<File | undefined> {
        //TODO 
        console.log(`query file - id: ${fileId}`)
        return undefined;
    }

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