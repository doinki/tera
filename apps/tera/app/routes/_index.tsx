import { NavLink } from '@remix-run/react';

const items = [
  { label: 'A', to: '/a' },
  { label: 'B', to: '/b' },
];

export default function Page() {
  return (
    <nav className="px-4 md:px-6 lg:px-8">
      <ul className="list-inside list-disc">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
