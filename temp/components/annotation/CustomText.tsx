import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

interface CustomTextProps {
    text: string;
    type: "underline" | "box" | "circle" | "highlight" | "strike-through" | "crossed-off" | "bracket";
    duration?: number;
    color?: string;
    className?: string;
}

const CustomText = ({text, type, duration, color, className}: CustomTextProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: type,
        color: color,
        strokeWidth: 2,
        animationDuration: duration,
      });
      annotation.show();
    }
  }, []);

  return (
        <span ref={ref} className={className}>
            {text}
        </span>
  );
};

export default CustomText;

/*

    underline: This style creates a sketchy underline below an element.
box: This style draws a box around the element.
circle: This style draws a circle around the element.
highlight: This style creates a highlight effect as if marked by a highlighter.
strike-through: This style draws horizontal lines through the element.
crossed-off: This style draws an 'X' across the element.
bracket: This style draws a bracket around an element, usually a paragraph of text. By default on the right side, but can be configured to any or all of left, right, top, bottom.

*/