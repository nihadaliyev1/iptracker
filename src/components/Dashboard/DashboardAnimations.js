export const dashboardVariants = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      mass: 0.5,
      stiffness: 70,
    },
  },
};
