"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import Focus from '@tiptap/extension-focus'
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"
import { Content, fromJSONContent } from "@/interface/Content"
import * as _ from "lodash";
import { UUID } from "crypto"
import { ContentAPI } from "@/api/content.api"
import { useDebounceState } from "@/hook/useDebounceState"

interface IProps {
  fileId: UUID
  initialContent: Content
}

export default function Editor({ fileId, initialContent }: IProps) {
  const {
    raw: [input, setInput],
    debounced: [content],
  } = useDebounceState(initialContent, 500)

  useEffect(() => {
    ContentAPI.updateContent(fileId, content)
  }, [fileId, content])

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
    content: input,
    onUpdate: ({ editor }) => {
      const jsonContent = editor.getJSON()
      const content = fromJSONContent(jsonContent)
      setInput(content)
    }
  })

  return <EditorContent editor={editor} />
}