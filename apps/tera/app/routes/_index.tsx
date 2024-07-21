import { type MetaFunction } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Tera' },
    { content: 'Welcome to Tera!', name: 'description' },
  ];
};

export default function Page() {
  return <div />;
}
