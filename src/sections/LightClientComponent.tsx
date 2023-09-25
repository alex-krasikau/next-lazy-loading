import { LightClientComponentClient } from "./LightClientComponentClient";

interface Props {}

export function LightClientComponent({}: Props) {
  return (
    <div className="py-16 px-8 bg-yellow-300/20 flex justify-between items-center">
      <h3 className="text-lg">Light Client Component</h3>

      <LightClientComponentClient />
    </div>
  );
}
