import {
  ViewportOptions,
  OnViewportChangeFn,
} from './index';

export interface ZoomAndPanProps {
  /** A default viewport */
  defaultViewport?: ViewportOptions;
  /** A viewport */
  viewport?: ViewportOptions;
  /** A function that is executed when viewport changes */
  onViewportChange?: OnViewportChangeFn;
  /** Interaction with arguments */
  interactionWithArguments?: 'none' | 'pan' | 'zoom' | 'both';
  /** Interaction with values */
  interactionWithValues?: 'none' | 'pan' | 'zoom' | 'both';
  /** A component that renders the drag box */
  dragBoxComponent: React.ComponentType<ZoomAndPan.DragBoxProps>;
  /** Specifies the key that enables panning */
  zoomRegionKey?: 'shift' | 'alt' | 'ctrl';
}

type Rect = { x: number; y: number; width: number; height: number; };

/** @internal */
export type ZoomAndPanState = {
  viewport?: ViewportOptions;
  rectBox?: Rect | null;
};

// tslint:disable-next-line: no-namespace
export namespace ZoomAndPan {
  export interface DragBoxProps {
    /** The rect’s coordinate */
    rect: Rect;
  }
}
