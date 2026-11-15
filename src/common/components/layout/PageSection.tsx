import { ReactNode } from 'react';
import { cn } from 'tailwind-variants';

interface PageSectionProps {
  children: ReactNode;
  classNames?: {
    root?: string;
    content?: string;
  };
}

export const PageSection = ({ children, classNames }: PageSectionProps) => {
  return (
    <div className={cn('w-full max-w-7xl px-4 py-2', classNames?.root)}>
      <div className={cn('w-full', classNames?.content)}>{children}</div>
    </div>
  );
};
