"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import Focus from '@tiptap/extension-focus'
import StarterKit from "@tiptap/starter-kit"
import { useEffect, useState } from "react"
import { Content, fromJSONContent } from "@/interface/Content"
import * as _ from "lodash";
import { UUID } from "crypto"
import { ContentAPI } from "@/api/content.api"

interface IProps {
  fileId: UUID
  initialContent: Content
}

export default function Editor({ fileId, initialContent }: IProps) {
  const [input, setInput] = useState<Content>(initialContent)

  const [content, setContent] = useState(input);
  const updateContent = _.debounce((value) => { setContent(value) }, 700);

  useEffect(() => {
    updateContent(input);
    return () => { updateContent.cancel() };
  }, [input, updateContent])

  useEffect(() => {
    async function updateContent() {
      ContentAPI.updateContent(fileId, content)
    }
    updateContent()
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