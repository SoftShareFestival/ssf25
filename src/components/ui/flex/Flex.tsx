import { createElement, forwardRef, Ref } from "react";
import cn from "classnames";
import s from './style.module.scss';
import { FlexProps } from "./Flex.type";

const Flex = forwardRef(function Flex(props: FlexProps, ref: Ref<any>) {
    const {
        as, children, className, 
        direction, justify, align,
        wrap, gap, style,
        fullHeight, fullWidth, fitContent,
        ...rest
    } = props;
    
    return createElement(as || "div", {
        ...rest,
        ref,
        className: cn(
            s.flexLayout,
            {
                [s.row]: direction === "row",
                [s.column]: direction === "column",
                [s.justifyStart]: justify === "start",
                [s.justifyEnd]: justify === "end",
                [s.justifyCenter]: justify === "center",
                [s.justifyBetween]: justify === "between",
                [s.justifyAround]: justify === "around",
                [s.alignStart]: align === "start",
                [s.alignEnd]: align === "end",
                [s.alignCenter]: align === "center",
                [s.alignStretch]: align === "stretch",
                [s.wrap]: wrap === "wrap",
                [s.fullHeight]: fullHeight,
                [s.fullWidth]: fullWidth,
            },
            className
        ),
        style: {
            ...style,
            gap: gap ? `${gap}px` : undefined,
        },
    }, children);
})

export default Flex;