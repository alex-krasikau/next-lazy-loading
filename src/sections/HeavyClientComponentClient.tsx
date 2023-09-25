"use client";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface Props {}

export function HeavyClientComponentClient({}: Props) {
  return <Select options={options} />;
}
