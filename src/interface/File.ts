import { DateTime } from "luxon";
import { z } from "zod";
import { ContentSchema } from "./Content";
import { UUID } from "crypto";

const dateTimeSchema = z.custom<DateTime>(
    (value) => DateTime.isDateTime(value),
    { message: "Invalid DateTime" }
);

const uuidSchema = z.custom<UUID>((value) => {
  return typeof value === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(value);
}, {
  message: "Invalid UUID",
});

export const FileScheme = z.object({
    id: uuidSchema,
    name: z.string(),
    ext: z.string(),
    description: z.string(),
    content: ContentSchema,
    createdAt: dateTimeSchema,
    lastModifiedAt: dateTimeSchema,
});

export type File = z.infer<typeof FileScheme>;
