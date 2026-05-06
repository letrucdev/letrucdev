type Props = {
  size?: number;
  className?: string;
};

export function BrandMark({ size = 24, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 1.5l1.7 7.6L21 12l-7.3 2.9L12 22.5l-1.7-7.6L3 12l7.3-2.9L12 1.5z" />
    </svg>
  );
}
