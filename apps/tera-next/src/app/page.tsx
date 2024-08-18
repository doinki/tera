import Link from 'next/link';

const items = [
  { href: '/a', label: 'A' },
  { href: '/b', label: 'B' },
];

export default function Page() {
  return (
    <nav className="px-4 md:px-6 lg:px-8">
      <ul className="list-inside list-disc">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
