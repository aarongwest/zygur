'use client';

export default function BadgeExample() {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="flex items-center justify-center">
        <a href="https://ehs.inc/register?verify=true" target="_blank" rel="noopener noreferrer">
          <img src="/us.png" alt="EHS Certified" width="80" height="80" style={{ opacity: 1 }} className="hover:opacity-80 transition-opacity" />
        </a>
      </div>
    </div>
  )
}
