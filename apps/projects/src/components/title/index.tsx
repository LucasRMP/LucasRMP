import React from 'react'


export const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h2
    className={`text-2xl font-bold font-mono text-slate-50 w-max ${className}`}
    {...props}
  >
    {children}
    <hr className="w-1/3 border-primary mt-1" />
  </h2>
)