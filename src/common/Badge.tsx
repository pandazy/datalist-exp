import { HtmlHTMLAttributes } from 'react';

export interface BadgeProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode,
  color: string,
}

export default function Badge({
  children,
  color,
  ...rest
}: BadgeProps) {
  return (
    <span
      style={{
        borderColor: color,
        borderStyle: 'solid',
        borderWidth: 1,
        color
      }}
      {...rest}
    >
      {children}
    </span>
  )
}
