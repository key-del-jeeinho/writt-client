"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import Focus from '@tiptap/extension-focus'
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"
import { Content, fromJSONContent } from "@/interface/Content"

interface IProps {
    initialContent: Content
}

export default function Editor({ initialContent }: IProps) {
  const [content, setContent] = useState<Content>(initialContent)

  useEffect(() => {
    console.log(content)
  }, [content])

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Focus.configure({
        className: 'focus outline-zinc-900 rounded outline outline-offset-8',
        mode: 'deepest',
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-zinc prose-base dark:prose-invert focus:outline-none',
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      const jsonContent = editor.getJSON()
      const content = fromJSONContent(jsonContent)
      setContent(content)
    }
  })

  return <EditorContent editor={editor} />
}