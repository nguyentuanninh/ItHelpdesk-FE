import React from 'react';

// Define the allowed size and color values as union types
type LoaderSize = 'xs' | 'sm' | 'default' | 'lg' | 'xl';
type LoaderColor =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'muted'
  | 'white'
  | 'black';

// Define the props interface
interface MiniLoaderProps {
  size?: LoaderSize;
  color?: LoaderColor;
  className?: string;
}

const MiniLoader: React.FC<MiniLoaderProps> = ({
  size = 'default',
  color = 'primary',
  className = '',
}) => {
  // Size mappings
  const sizeMap = {
    xs: 'h-3 w-3 border-[2px]',
    sm: 'h-4 w-4 border-[2px]',
    default: 'h-5 w-5 border-[2px]',
    lg: 'h-6 w-6 border-[3px]',
    xl: 'h-8 w-8 border-[3px]',
  };

  // Color mappings
  const colorMap = {
    primary: 'border-primary border-t-transparent',
    secondary: 'border-secondary border-t-transparent',
    destructive: 'border-destructive border-t-transparent',
    muted: 'border-muted-foreground border-t-transparent',
    white: 'border-white border-t-transparent',
    black: 'border-black border-t-transparent',
  };

  // Now TypeScript knows these are valid keys
  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];

  return (
    <div
      className={`inline-block animate-spin rounded-full ${sizeClass} ${colorClass} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MiniLoader;
