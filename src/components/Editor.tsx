"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

interface IProps {
    content: string
}

export default function Editor({ content }: IProps) {
    const editor = useEditor({
      extensions: [
        StarterKit,
      ],
      editorProps: {
        attributes: {
          class: 'prose prose-zinc prose-base dark:prose-invert focus:outline-none',
        },
      },
      content: content,
    })
  
    return <EditorContent editor={editor} />
}