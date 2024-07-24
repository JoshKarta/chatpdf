import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

export default function DashboardPage() {
    return (
        <div className='pt-[100px] h-full max-w-7xl mx-auto w-full'>
            <h1 className='text-3xl p-4 bg-gray-50 font-extralight text-green-500 rounded-t-lg'>
                My Documents
            </h1>
            <Documents />
        </div>
    )
}
