import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactSection",
  title: "Contact",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above heading)", type: "string" }),
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({ name: "description", title: "Description paragraph", type: "text", rows: 4 }),
    defineField({
      name: "schedulingText",
      title: "Scheduling paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "schedulingButtonLabel",
      title: "Scheduling button label",
      type: "string",
    }),
    defineField({
      name: "schedulingUrl",
      title: "Scheduling link (URL)",
      type: "url",
    }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "address", title: "Office address", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Contact" }) },
});
