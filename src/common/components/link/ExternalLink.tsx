interface ExternalLinkProps {
  href: string;
  children?: string;
}

export const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children ?? href}
    </a>
  );
};
