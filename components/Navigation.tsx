"use client";

export function Navigation() {
  return (
    <nav className="w-full bg-brand-mint sticky top-0 z-50" style={{ backgroundColor: '#42f5ad' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center" style={{ marginLeft: '-20px' }}>
            <a href="/" className="flex items-center">
              <img src="/logo.png" alt="Zygur" className="h-8 invert opacity-75" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
