import { ReactNode } from 'react';
import { cn } from 'tailwind-variants';

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  return (
    <div className={cn('flex w-full flex-col items-center py-2', className)}>
      {children}
    </div>
  );
};
