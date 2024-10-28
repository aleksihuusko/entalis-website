import { AlbumIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-x-2 text-lg font-medium',
        className,
      )}
    >
      <AlbumIcon className="size-7 rounded-md bg-blue-500 p-1.5 text-white" />
      Entalis
    </div>
  )
}
