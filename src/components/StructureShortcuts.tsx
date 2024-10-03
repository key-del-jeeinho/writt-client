import { ArrowDownNarrowWideIcon, ChevronsUpDownIcon, FilePlusIcon, FolderPlusIcon } from "lucide-react";

export default function IndexShortcuts() {
    return (
        <div className="h-12 mx-4 flex flex-row justify-between px-4 items-center flex-shrink-0 flex-grow-0">
        <div className="flex flex-row gap-4 w-full">
          <FolderPlusIcon className="w-4 h-4" />
          <FilePlusIcon className="w-4 h-4" />
          <ArrowDownNarrowWideIcon className="w-4 h-4" />
          <ChevronsUpDownIcon className="w-4 h-4" />
        </div>
      </div>
    )
}