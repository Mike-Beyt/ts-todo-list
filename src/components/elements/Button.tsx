import styled, { CSSObject } from "styled-components";

interface ConfigButton {
  add: CSSObject & {
    hover?: CSSObject;
  };

  submit: CSSObject & {
    hover?: CSSObject;
  };

  delete: CSSObject & {
    hover?: CSSObject;
  };
}

const type: ConfigButton = {
  add: {
    padding: "1rem 4rem",
    backgroundColor: "var(--color-orange)",
    border: "none",
    color: "var(--color-white)",
    borderRadius: "var(--border-sm)",
    transition: "all 0.3s",
    fontSize: "var(--fs-xsm)",

    hover: {
      backgroundColor: "var(--color-white)",
      color: "var(--color-orange)",
      borderRadius: "var(--border-md)",
    },
  },

  submit: {
    padding: "1rem 4rem",
    backgroundColor: "var(--color-purple)",
    border: "none",
    color: "var(--color-white)",
    borderRadius: "var(--border-sm)",
    transition: "all 0.3s",
    fontSize: "var(--fs-xsm)",

    hover: {
      backgroundColor: "var(--color-white)",
      color: "var(--color-orange)",
      borderRadius: "var(--border-md)",
    },
  },

  delete: {
    padding: "1rem 3rem",
    backgroundColor: "var(--color-red)",
    border: "none",
    color: "var(--color-white)",
    borderRadius: "var(--border-sm)",
    transition: "all 0.3s",
    fontSize: "var(--fs-xsm)",

    hover: {
      backgroundColor: "var(--color-white)",
      color: "var(--color-red)",
      borderRadius: "var(--border-md)",
    },
  },
};

interface ButtonProps {
  type: keyof ConfigButton;
}

const Button = styled.button<ButtonProps>`
  ${(props) => props.type && type[props.type]};

  &:hover {
    ${(props) => props.type && type[props.type]?.hover};
  }
`;

export default Button;
