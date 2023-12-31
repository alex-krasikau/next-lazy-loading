import dynamic from "next/dynamic";

interface Props {}

const HeavyClientComponentClient = dynamic(
  () => import("./HeavyClientComponentClient")
);

export function HeavyClientComponent({}: Props) {
  return (
    <div className="py-16 px-8 bg-red-300/40 flex justify-between items-center">
      <h3 className="text-lg">Heavy Client Component</h3>

      <HeavyClientComponentClient />
    </div>
  );
}
