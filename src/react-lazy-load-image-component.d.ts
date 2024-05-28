declare module "react-lazy-load-image-component" {
  import { ComponentType, CSSProperties, ImgHTMLAttributes } from "react";

  interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    alt?: string;
    className?: string;
    delayMethod?: "debounce" | "throttle";
    delayTime?: number;
    effect?: string;
    height?: string | number;
    placeholder?: JSX.Element;
    scrollPosition?: { x: number; y: number };
    threshold?: number;
    useIntersectionObserver?: boolean;
    width?: string | number;
    afterLoad?: () => void;
    beforeLoad?: () => void;
    onError?: () => void;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: object;
    wrapperStyle?: CSSProperties;
  }

  const LazyLoadImage: ComponentType<LazyLoadImageProps>;

  export { LazyLoadImage };
}
