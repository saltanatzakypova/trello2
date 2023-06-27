export const MuiButton = {
  variants: [
    {
      props: { variant: "text" },
      style: ({ theme }) => ({}),
    },
    {
      props: { variant: "contained" },
      style: ({ theme }) => ({ theme }),
    },
    { props: { variant: "outlined" }, style: () => ({}) },
  ],
};
