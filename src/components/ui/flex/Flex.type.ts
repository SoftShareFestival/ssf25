import { BaseLayoutProps, LayoutSizeProps } from '@/types/layout';
import { ElementType } from 'react';

export interface FlexProps extends BaseLayoutProps, Partial<LayoutSizeProps> {
	as?: ElementType;
	direction?: 'row' | 'column';
	justify?: 'start' | 'end' | 'center' | 'between' | 'around';
	align?: 'start' | 'end' | 'center' | 'stretch';
	wrap?: 'wrap' | 'nowrap';
	gap?: number;
}
