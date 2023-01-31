import type {
	componentStatuses,
	componentColors,
	componentPositions,
	componentSizes,
	componentShapes,
	bgColors,
	brandColors
} from './constants';
import type { DEFAULT_THEMES } from './defaultThemes';

export type DataTheme = (typeof DEFAULT_THEMES)[number];

export type ComponentColor = (typeof componentColors)[number];

export type ComponentPosition = (typeof componentPositions)[number];
export type ComponentShape = (typeof componentShapes)[number];
export type ComponentSize = (typeof componentSizes)[number];
export type ComponentStatus = (typeof componentStatuses)[number];
export type ComponentBrandColors = (typeof brandColors)[number];
export type ComponentBgColors = (typeof bgColors)[number];

export interface IComponentBaseProps<T = Element> {
	dataTheme?: DataTheme;
	className?: string;
	element?: T;
}
