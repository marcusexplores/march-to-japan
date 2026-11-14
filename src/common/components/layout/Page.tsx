import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
  return <div className="w-full py-2">{children}</div>;
};
