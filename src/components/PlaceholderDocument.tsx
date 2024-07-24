"use client";
import { useRouter } from 'next/navigation';
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'

export default function PlaceholderDocument() {
    const router = useRouter()

    const handleClick = () => {
        router.push("/dashboard/upload")
    }

    return (
        <Button onClick={handleClick} className='flex flex-col space-y-2 items-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400 hover:!bg-primary/90'>
            <PlusCircleIcon className='h-16 w-16' />
            <p>Add a document</p>
        </Button>
    )
}
