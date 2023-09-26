"use client";

import ReactSelect from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface Props {}

export default function HeavyClientComponentClient({}: Props) {
  return <ReactSelect options={options} />;
}
