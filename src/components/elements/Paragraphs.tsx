import styled, { CSSObject } from "styled-components";

interface ConfigParagraph {
  paragraph: CSSObject;
  messageParagraph: CSSObject;
  taskParagrapgh: CSSObject;
}

const type: ConfigParagraph = {
  paragraph: {
    fontSize: "var(--fs-xsm)",
    textAlign: "center",
    color: "var(--color-blue)",
  },

  messageParagraph: {
    fontSize: "var(--fs-sm)",
    textAlign: "center",
    color: "var(--color-lightblue)",
  },

  taskParagrapgh: {
    fontSize: "var(--fs-sm)",
    color: "var(--color-lightblue)",
  },
};

interface HeadingProps {
  type: keyof ConfigParagraph;
}

const Headings = styled.h1<HeadingProps>`
  ${(props) => props.type && type[props.type]};
`;

export default Headings;
