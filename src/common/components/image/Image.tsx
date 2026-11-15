import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<
  NextImageProps,
  'width' | 'height' | 'className'
> {
  classNames?: {
    image?: string;
  };
}

export const Image = ({ src, alt, classNames }: ImageProps) => {
  return (
    <div className={classNames?.image}>
      <NextImage
        src={src}
        alt={alt}
        className="size-full object-cover"
        width={0}
        height={0}
      />
    </div>
  );
};
