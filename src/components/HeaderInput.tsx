"use client"

import { useEffect } from "react";
import { Input } from "./ui/input";
import { File } from "@/interface/File";
import { ContentAPI } from "@/api/content.api";
import { useDebounceState } from "@/hook/useDebounceState";

interface IProps {
    file: Pick<File, 'id' | 'name'>
}

export default function DescriptionInput({ file }: IProps) {
  const { 
    raw: [input, setInput], 
    debounced: [name],
  } = useDebounceState(file.name, 500)

  useEffect(() => {
    ContentAPI.updateName(file.id, name)
  }, [file.id, name])

  return (<>
    <h2 className="sr-only">{input}</h2>
    <Input 
      value={input} 
      className="w-auto p-0 border-none text-3xl font-extrabold leading-tight"
      onChange={(e) => setInput(e.target.value)}
    ></Input>
  </>)
}