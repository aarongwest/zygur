'use client'

export function LoadingSpinner() {
  return (
    <div className="flex space-x-1 items-center">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="w-1 h-1 bg-zinc-400 rounded-full animate-[loader_1.4s_ease-in-out_infinite]"
          style={{
            animationDelay: `${i * 0.16}s`,
          }}
        />
      ))}
    </div>
  )
}
