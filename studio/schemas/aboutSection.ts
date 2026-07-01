import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "About",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above heading)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "stats",
      title: "Credential badges",
      type: "array",
      of: [
        defineField({
          name: "stat",
          title: "Badge",
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value (e.g. LPC, 8+)", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "About" }) },
});
