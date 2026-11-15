import { ReactNode } from 'react';
import { cn } from 'tailwind-variants';

interface PageSectionProps {
  title?: string;
  children: ReactNode;
  classNames?: {
    root?: string;
    title?: string;
    content?: string;
  };
}

export const PageSection = ({
  title,
  children,
  classNames,
}: PageSectionProps) => {
  return (
    <div
      className={cn(
        'flex w-full max-w-7xl flex-col gap-1 px-4 py-2 sm:px-5 md:px-6 lg:px-8',
        classNames?.root,
      )}
    >
      {title && <p className="text-sm font-semibold">{title}</p>}
      <div className={cn('w-full', classNames?.content)}>{children}</div>
    </div>
  );
};
