import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({ children, className = '', id }: ContainerProps) {
  return (
    <div id={id} className={`w-full max-w-4xl mx-auto ${className}`}>
      {children}
    </div>
  );
} 