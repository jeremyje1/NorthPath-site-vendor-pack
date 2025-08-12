'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/vendor-pack', label: 'Vendor Pack' },
    { href: '/connectors', label: 'Connectors' },
    { href: '/evalops', label: 'EvalOps' },
    { href: '/pricing', label: 'Pricing' },
  ];
  return (
    <header className="border-b border-gray-200">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          {process.env.NEXT_PUBLIC_BRAND_NAME || 'NorthPath Strategies'}
        </Link>
        <nav className="flex gap-4">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className={pathname === n.href ? 'text-black' : ''}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
