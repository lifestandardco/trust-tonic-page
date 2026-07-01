import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

// Each section is a "singleton": exactly one editable document.
const SINGLETONS = [
  { id: "aboutSection", title: "About" },
  { id: "expertiseSection", title: "Areas of Expertise" },
  { id: "faqSection", title: "FAQ" },
  { id: "testimonialsSection", title: "Testimonials" },
  { id: "contactSection", title: "Contact" },
];

const singletonIds = new Set(SINGLETONS.map((s) => s.id));

export default defineConfig({
  name: "default",
  title: "Britney Worley Counseling",

  projectId: "tl2cmlt6",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website Content")
          .items(
            SINGLETONS.map((s) =>
              S.listItem()
                .title(s.title)
                .id(s.id)
                .child(S.document().schemaType(s.id).documentId(s.id)),
            ),
          ),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Keep singletons out of the global "create new document" menu.
    templates: (templates) =>
      templates.filter((t) => !singletonIds.has(t.schemaType)),
  },

  document: {
    // Singletons can be edited/published but not created or deleted.
    actions: (input, context) =>
      singletonIds.has(context.schemaType)
        ? input.filter(({ action }) =>
            ["publish", "discardChanges", "restore"].includes(action ?? ""),
          )
        : input,
  },
});
