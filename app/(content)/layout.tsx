import { ReactNode } from 'react';
import { AppNavigation } from '@/src/common/components/navigation';
import { navRoutes } from '@/src/common/utilities/routes';

interface ContentLayoutProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="flex h-svh flex-col">
      <div className="flex-1 overflow-y-auto">{children}</div>
      <AppNavigation routes={navRoutes} />
    </div>
  );
}
