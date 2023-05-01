"use client"

import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import TextareaAutosize from "react-textarea-autosize"

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> =({className, ...props}) => {
    return <div {...props} className={cn('border-t border-zinc-300', className)}>
        <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
            <TextareaAutosize
            rows={2}
            maxRows={4}
            autoFocus
            placeholder="write a message..."
            className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6" />
        </div>
    </div>
}

export default ChatInput