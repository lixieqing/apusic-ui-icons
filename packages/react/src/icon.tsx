import React from "react";
import classNames from "classnames";
import {
  createElement,
  SVGAttributes,
  CSSProperties,
  forwardRef,
  Ref,
  useEffect,
} from "react";
import { loadStylesheet } from "./utils";

export interface Attrs {
  [key: string]: any;
}
export interface IconElement {
  tag: string;
  attrs: Attrs;
  children?: IconElement[];
}
export interface IconProps extends SVGAttributes<SVGSVGElement> {
  style?: CSSProperties;
  className?: string;
  spin?: boolean;
  rotate?: number;
}

export interface IconSvgProps extends IconProps {
  icon: IconElement;
  id: string;
}

const render = (node: any, id: string, rootProps?: any) => {
  return createElement(
    node.tag,
    {
      key: id,
      ...node.attrs,
      ...rootProps,
    },
    (node.children || []).map((child, index) =>
      render(child, `${id}-${node.tag}-${index}`)
    )
  );
};

export const IconBase = forwardRef(
  (props: IconSvgProps, ref: Ref<SVGSVGElement>) => {
    const { icon, id, spin, className, style, rotate, ...restProps } = props;

    const classString = classNames(
      {
        "apusic-icon-spin": !!spin,
      },
      className
    );

    const svgClassString = classNames("apusic-icon", `apusic-icon-${id}`, {
      "apusic-icon-spin": !!spin,
    });

    const svgStyle = rotate
      ? {
          msTransform: `rotate(${rotate}deg)`,
          transform: `rotate(${rotate}deg)`,
        }
      : undefined;

    useEffect(() => {
      loadStylesheet();
    }, []);

    return (
      <span style={{ ...style }} className={classString}>
        {render(icon, `${id}`, {
          ref,
          className: svgClassString,
          style: svgStyle,
          ...restProps,
        })}
      </span>
    );
  }
);
IconBase.displayName = "IconBase";
