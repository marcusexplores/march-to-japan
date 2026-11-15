import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from 'react-aria-components';
import { BiMapAlt } from 'react-icons/bi';

interface ActivityMapProps {
  map: string;
}

export const ActivityMap = ({ map }: ActivityMapProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex flex-col items-center gap-2">
      <DialogTrigger onOpenChange={(isOpen) => isOpen && setIsLoading(true)}>
        <Button className="bg-success aspect-square cursor-pointer rounded-full p-4">
          <BiMapAlt />
        </Button>

        <ModalOverlay
          isDismissable
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <Modal className="bg-surface w-full max-w-7xl overflow-hidden rounded-lg shadow-xl">
            <Dialog className="outline-none">
              <div className="relative aspect-square max-h-120 w-full bg-gray-100">
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-100">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-600" />
                    <p className="text-sm text-gray-500">Loading map...</p>
                  </div>
                )}
                <iframe
                  src={map}
                  onLoad={() => setIsLoading(false)}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-square max-h-120 w-full border-0"
                />
              </div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
      <p className="text-xs">View Map</p>
    </div>
  );
};
