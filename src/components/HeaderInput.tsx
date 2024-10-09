"use client"

import { useEffect } from "react";
import { Input } from "./ui/input";
import { File } from "@/interface/File";
import { FileAPI } from "@/api/file.api";
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
    FileAPI.updateName(file.id, name)
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