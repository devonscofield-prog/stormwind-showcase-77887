import { useMemo } from "react";
import { glyphSvg, type GlyphKind } from "@/lib/isoScene";

interface IsoGlyphProps {
  kind: GlyphKind;
  color: string;
}

/** Small isometric glyph used in the Cloud topic cards. */
export const IsoGlyph = ({ kind, color }: IsoGlyphProps) => {
  const markup = useMemo(() => glyphSvg(kind, color), [kind, color]);
  return (
    <svg
      viewBox="0 0 120 110"
      aria-hidden="true"
      focusable="false"
      style={{ width: 120, height: 110, overflow: "visible" }}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};

export default IsoGlyph;
