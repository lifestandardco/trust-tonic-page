import { defineType, defineField } from "sanity";

export default defineType({
  name: "faqSection",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above heading)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Question",
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "FAQ" }) },
});
