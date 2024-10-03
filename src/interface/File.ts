import { DateTime } from "luxon";
import { z } from "zod";

const dateTimeSchema = z.custom<DateTime>(
    (value) => DateTime.isDateTime(value),
    { message: "Invalid DateTime" }
);

export const FileScheme = z.object({
    id: z.string().uuid(),
    name: z.string(),
    ext: z.string(),
    description: z.string(),
    content: z.string(),
    createdAt: dateTimeSchema,
    lastModifiedAt: dateTimeSchema,
});

export type File = z.infer<typeof FileScheme>;
