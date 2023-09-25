import { Section } from "@/content/pages";
import { HeavyClientComponent } from "@/sections/HeavyClientComponent";
import { HeavyClientComponent2 } from "@/sections/HeavyClientComponent2";
import { HeavyServerComponent } from "@/sections/HeavyServerComponent";
import { LightClientComponent } from "@/sections/LightClientComponent";
import { LightServerComponent } from "@/sections/LightServerComponent";

interface Props {
  section: Section;
}

export function PageSection({ section }: Props) {
  switch (section.type) {
    case "light-server-component":
      return <LightServerComponent />;

    case "heavy-server-component":
      return <HeavyServerComponent />;

    case "light-client-component":
      return <LightClientComponent />;

    case "heavy-client-component":
      return <HeavyClientComponent />;

    case "heavy-client-component-2":
      return <HeavyClientComponent2 />;
  }
}
