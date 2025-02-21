import React, { useMemo } from 'react';
import cx from 'classnames';

import './index.scss';

export type SizeType = 'small' | 'middle' | 'large' | number | undefined;

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  wrap?: boolean;
  size?: SizeType | [SizeType, SizeType];
  split?: React.ReactNode;
}

const spaceSizeMap = {
  small: 4,
  middle: 8,
  large: 12,
};

export function Space({
  className,
  style,
  children,
  direction = 'horizontal',
  align = 'center',
  wrap = false,
  size,
  split,
  ...otherProps
}: SpaceProps) {
  const [horizontalSize, verticalSize] = useMemo(() => {
    if (Array.isArray(size)) {
      return size;
    }
    return [size, size];
  }, [size]);
  const otherStyles: React.CSSProperties = {};
  otherStyles.columnGap = `${spaceSizeMap[horizontalSize]}px`;
  otherStyles.rowGap = `${spaceSizeMap[verticalSize]}px`;
  if (wrap) {
    otherStyles.flexWrap = 'wrap';
  }
  return (
    <div
      className={cx(
        className,
        'space',
        `space--${direction}`,
        `space--align-${align}`
      )}
      style={{
        ...style,
        ...otherStyles,
      }}
      {...otherProps}
    >
      {React.Children.map(children, (child, index) => {
        const key = child?.key ?? `space-item-${index}`;
        return (
          <div key={key} className="space-item">
            {child}
          </div>
        );
      })}
    </div>
  );
}
