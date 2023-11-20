import styled, { CSSObject } from "styled-components";

interface ConfigHeader {
  header: CSSObject;
  messageHeader: CSSObject;
  taskHeader: CSSObject;
}

const type: ConfigHeader = {
  header: {
    fontSize: "var(--fs-xl)",
    textAlign: "center",
    color: "var(--color-blue)",
  },

  messageHeader: {
    fontSize: "var(--fs-md)",
    textAlign: "center",
    color: "var(--color-black)",
  },

  taskHeader: {
    fontSize: "var(--fs-sm)",
    color: "var(--color-orange)",
  },
};

interface HeadingProps {
  type: keyof ConfigHeader;
}

const Headings = styled.h1<HeadingProps>`
  ${(props) => props.type && type[props.type]};
`;

export default Headings;
