"use client"

import { EditorContent, JSONContent, useEditor } from "@tiptap/react"
import Focus from '@tiptap/extension-focus'
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"

interface IProps {
    initialContent: string
}

export default function Editor({ initialContent }: IProps) {
  const [content, setContent] = useState<JSONContent>()

  useEffect(() => {
    console.log(content)
  }, [content])

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-zinc prose-base dark:prose-invert focus:outline-none',
      },
    },
    content: initialContent,
    onUpdate: ({ editor }) => setContent(editor.getJSON())
  })

  return <EditorContent editor={editor} />
}