import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonialsSection",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above heading)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "items",
      title: "Testimonials",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Testimonial",
          type: "object",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 5 }),
            defineField({ name: "name", title: "Name & credentials", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "quote" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Testimonials" }) },
});
