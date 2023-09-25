interface Page {
  title: string;
  sections: Section[];
}

export interface Section {
  type:
    | "light-server-component"
    | "light-client-component"
    | "heavy-server-component"
    | "heavy-client-component"
    | "heavy-client-component-2";
}

export const pages: Page[] = [
  {
    title: "Light server page",
    sections: [{ type: "light-server-component" }],
  },

  {
    title: "Heavy server page",
    sections: [
      { type: "light-server-component" },
      { type: "heavy-server-component" },
    ],
  },

  {
    title: "Light client page",
    sections: [
      { type: "light-server-component" },
      { type: "heavy-server-component" },
      { type: "light-client-component" },
    ],
  },

  {
    title: "Heavy client page",
    sections: [
      { type: "light-server-component" },
      { type: "heavy-server-component" },
      { type: "heavy-client-component" },
    ],
  },

  {
    title: "Heaviest client page",
    sections: [
      { type: "light-server-component" },
      { type: "heavy-server-component" },
      { type: "light-client-component" },
      { type: "heavy-client-component" },
      { type: "heavy-client-component-2" },
    ],
  },
];
