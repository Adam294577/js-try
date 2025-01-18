export const QSelectProps = {
  dense: true,
  clearable: true,
  outlined: true,
  square: true,
  // 'lazy-rules': false,
  "popup-content-class": "max-w-[500px] max-h-[350px]",
  class: "my-field-style",
  // 'use-input': true,
  // 'hide-selected': true,
  // 'fill-input': true,
  // 'input-debounce': '0',
};

export const QSelectPropsHideSelected = {
  dense: true,
  clearable: true,
  outlined: true,
  square: true,
  "lazy-rules": "ondemand",
  "popup-content-class": "max-w-[500px] max-h-[350px]",
  class: "my-field-style",
  "use-input": true,
  "hide-selected": true,
  "fill-input": true,
  "input-debounce": "500",
};

export const QInputProps = {
  dense: true,
  outlined: true,
  square: true,
  // 'lazy-rules': true,
  class: "my-field-style text-[20px]",
};
export const QCheckBoxProps = {
  size: "26px",
  class: "border-2 border-red-600 w-0 h-0 relative -left-2 mr-2",
};

export const QTableProps = {
  "hide-pagination": true,
  separator: "cell",
  flat: true,
  square: true,
  dense: true,
  color: "primary",
  "wrap-cells": true,
  "card-class": "border border-[rgba(33,92,186,0.4)]",
};
export const QTableNoBorderProps = {
  "hide-pagination": true,
  separator: "cell",
  flat: true,
  square: true,
  dense: true,
  color: "primary",
  "wrap-cells": true,
};

export const QOptionProps = {
  dense: true,
  outlined: true,
  square: true,
  // 'lazy-rules': true,
  class: "bg-white border border-[#1e40af] pr-3 ml-[0px] w-full",
};

export const QFieldProps = {
  dense: true,
  outlined: false,
  square: false,
  color: "black",
  borderless: true,
  // 'lazy-rules': true,
  class: "frank-field",
};
