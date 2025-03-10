import { FC } from 'react';
import styled from '@emotion/styled';
import { icons } from '../shared/icons';

const Svg = styled.svg<{ block: boolean }>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;

  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
  fill: currentColor;
`;

export type Icons = keyof typeof icons;

export interface IconProps {
  icon: Icons;
  block?: boolean;
}

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
export const Icon: FC<IconProps> = ({ icon, block = false, ...props }) => {
  return (
    <Svg
      viewBox='0 0 1024 1024'
      width='20px'
      height='20px'
      block={block}
      {...props}
    >
      <Path d={icons[icon]} />
    </Svg>
  );
};
