// This file is generated automatically by `useTemplate.ts`. DO NOT EDIT IT.

import { createElement, forwardRef, Ref } from "react";
import { IconBase, IconProps } from "../icon";

const element = $ELEMENT;

const $ICON_NAME = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref: Ref<SVGSVGElement>) =>
    createElement(IconBase, {
      ...props,
      id: "$KEY",
      ref,
      icon: element,
    })
);

$ICON_NAME.displayName = "$ICON_NAME";

export default $ICON_NAME;
