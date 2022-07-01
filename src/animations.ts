const DELAY_SHORT = 1

const NAV_LIST = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
};
  
const NAV_ITEM = {
    hidden: { opacity: 0, translateX: "-100px" },
    show: { opacity: 1, translateX: 0 },
};
  
const HOVER_STATE = {
    color: "#6d28d9",
    transition: { duration: 0.2 },
};
  
const NAV_VARIANT = {
    closed: {
      width: 0,
    },
    open: {
      width: "100%",
      transition: {
        delay: 0.1,
      },
    },
    exit: {
      width: 0,
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
};

const DIV_VARIANT = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
};
  
const LETTER_VARIANT = {
    hide: { opacity: 0, y: "-100px" },
    show: { opacity: 1, y: 0 },
};
  
const FADEIN_Y = {
    hide: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { delay: DELAY_SHORT } },
};

const FADEIN_LEFT = {
    hide: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { delay: DELAY_SHORT } },
  };

const HAMBURGER_VARIANTS = {
open1: {
    WebkitTransform: "translateX(-10px) rotate(-45deg)",
    width: "28px",
    backgroundColor: "black",
},
open2: {
    WebkitTransform: "translateX(-10px) rotate(45deg)",
    width: "28px",
    backgroundColor: "black",
},
openReverse1: {
    WebkitTransform: "translateX(10px) rotate(45deg)",
    width: "28px",
},
openReverse2: {
    WebkitTransform: "translateX(10px) rotate(-45deg)",
    width: "28px",
},
open3: {
    backgroundColor: "black",
},
closed: {},
};

const HAMBURGER_TRANSITION = { ease: "easeInOut", duration: "0.15" };

export const HAMBURGER_ANIMATIONS = {HAMBURGER_VARIANTS, FADEIN_Y, HAMBURGER_TRANSITION}
export const SOCIAL_ANIMATIONS = {FADEIN_LEFT}
export const NAV_ANIMATIONS = {NAV_VARIANT, NAV_ITEM, NAV_LIST, HOVER_STATE}
export const HERO_ANIMATIONS = {DIV_VARIANT, LETTER_VARIANT, FADEIN_Y}