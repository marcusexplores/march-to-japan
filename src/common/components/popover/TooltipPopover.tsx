import { OverlayArrow, Popover, PopoverProps } from 'react-aria-components';

interface TooltipPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

export const TooltipPopover = ({ children, ...props }: TooltipPopoverProps) => {
  return (
    <Popover
      offset={8}
      {...props}
      className={({ isEntering, isExiting }) =>
        `group relative max-w-xs rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-md transition duration-150 ease-out dark:border dark:border-neutral-700 dark:bg-neutral-800 ${
          isEntering
            ? 'animate-in fade-in zoom-in-95 placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1'
            : ''
        } ${
          isExiting
            ? 'animate-out fade-out zoom-out-95 placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1'
            : ''
        } `
      }
    >
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
          className="group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90 block fill-neutral-900 dark:fill-neutral-800"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </Popover>
  );
};
