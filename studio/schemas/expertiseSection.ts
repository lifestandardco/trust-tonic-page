import { defineType, defineField } from "sanity";

export default defineType({
  name: "expertiseSection",
  title: "Areas of Expertise",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above heading)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineField({
          name: "card",
          title: "Card",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Heart", value: "heart" },
                  { title: "Sparkles", value: "sparkles" },
                  { title: "Shield", value: "shield" },
                  { title: "Fingerprint", value: "fingerprint" },
                ],
                layout: "radio",
              },
              initialValue: "heart",
            }),
            defineField({
              name: "experiences",
              title: "Common experiences",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
          preview: { select: { title: "title" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Areas of Expertise" }) },
});
