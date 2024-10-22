"use client"

import { Input } from "./ui/input";
import { File } from "@/interface/File";
import { useDebounceState } from "@/hook/useDebounceState";
import { useEffect } from "react";
import { FileAPI } from "@/api/file.api";

interface IProps {
    file: File
}

export default function DescriptionInput({ file }: IProps) {
  const { 
    raw: [input, setInput], 
    debounced: [description],
  } = useDebounceState(file.description, 500)

  useEffect(() => {
    FileAPI.updateDescription(file.id, description)
  }, [file.id, description])

  return (
    <Input 
      value={input} 
      className="w-auto p-0 border-none text-base"
      onChange={(e) => setInput(e.target.value)}
    ></Input>
  )
}