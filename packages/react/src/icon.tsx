import classNames from "classnames";
import {
  createElement,
  SVGAttributes,
  CSSProperties,
  forwardRef,
  Ref,
} from "react";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  style?: CSSProperties;
  className?: string;
  size?: "small" | "medium" | "large" | string | number;
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

export const IconBase = forwardRef((props: any, ref: Ref<SVGSVGElement>) => {
  const { icon, id, className, size, style, ...restProps } = props;
  const cls = classNames("apusic-icon", `apusic-icon-${id}`, className);

  return render(icon, `${id}`, {
    ref,
    className: cls,
    style,
    ...restProps,
  });
});
