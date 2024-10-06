/* eslint-disable @typescript-eslint/no-explicit-any */

import { JSONContent } from "@tiptap/react";
import { z } from "zod";
import * as _ from "lodash";

/**
 * @see Editor.ts in @tiptap/core
 */
export const ContentSchema: z.ZodSchema<Content> = z.object({
    type: z.string().optional(),
    attrs: z.record(z.any()).optional(),
    content: z.array(z.lazy(() => ContentSchema)).optional(),
    marks: z.array(
      z.object({
        type: z.string(),
        attrs: z.record(z.any()).optional(),
        others: z.record(z.any()).optional(),
      })
    ).optional(),
    text: z.string().optional(),
    others: z.record(z.any()).optional(),
  })

export type Content = {
    type?: string;
    attrs?: Record<string, any>;
    content?: Content[];
    marks?: {
      type: string;
      attrs?: Record<string, any>;
      others?: Record<string, any>;
    }[];
    text?: string;
    others?: Record<string, any>;
};

export function fromJSONContent(content: JSONContent): Content {
    const contentKeys = ['type', 'attrs', 'content', 'marks', 'text'];
    const markKeys = ['type', 'attrs']
    return {
        type: content.type,
        attrs: content.attrs,
        content: content.content?.map(fromJSONContent), // 재귀적으로 Content 변환
        marks: content.marks?.map(mark => ({
          type: mark.type,
          attrs: mark.attrs,
          others: _.omit(mark, markKeys)
        })),
        text: content.text,
        others: _.omit(content, contentKeys),
      };
}
