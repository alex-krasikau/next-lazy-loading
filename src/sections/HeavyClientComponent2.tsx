import { HeavyClientComponent2Client } from "./HeavyClientComponent2Client";

interface Props {}

export function HeavyClientComponent2({}: Props) {
  return (
    <div className="py-16 px-8 bg-red-300/60 flex justify-between items-center">
      <h3 className="text-lg">Heavy Client Component 2</h3>

      <HeavyClientComponent2Client />
    </div>
  );
}
