import { ReactNode } from 'react';
import { cn } from 'tailwind-variants';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export const PageSection = ({ children, className }: PageSectionProps) => {
  return (
    <div className={cn('w-full max-w-7xl px-4 py-2', className)}>
      {children}
    </div>
  );
};
