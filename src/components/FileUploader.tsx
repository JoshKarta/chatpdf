"use client";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CheckCircleIcon, CircleArrowDown, HammerIcon, RocketIcon, SaveIcon } from "lucide-react";

export default function FileUploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } = useDropzone({ onDrop })
    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
            <div {...getRootProps()}
                className={`p-10 border-2 border-dashed border-green-500 text-green-500 mt-10 w-[90%] rounded-lg h-96 flex items-center justify-center ${isFocused || isDragAccept ? "bg-green-300" : "bg-green-100"}`}
            >

                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center gap-2">
                    {
                        isDragActive ?
                            <>
                                <RocketIcon className='h-10 w-10 animate-ping' />
                                <p>Drop the files here ...</p>
                            </>
                            :
                            <>
                                <CircleArrowDown className='h-10 w-10' />
                                <p className='text-center'>Drag 'n' drop some files here, or click to select files</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
