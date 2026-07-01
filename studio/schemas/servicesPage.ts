import { defineType, defineField } from "sanity";

export default defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow (small label above headline)", type: "string" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        defineField({
          name: "service",
          title: "Service",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  { title: "Phone", value: "phone" },
                  { title: "Chair", value: "armchair" },
                  { title: "Group", value: "users" },
                ],
                layout: "radio",
              },
              initialValue: "phone",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({ name: "price", title: "Price line", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "price" } },
        }),
      ],
    }),
    defineField({ name: "insuranceHeading", title: "Insurance section heading", type: "string" }),
    defineField({ name: "inNetworkHeading", title: "In-network subheading", type: "string" }),
    defineField({
      name: "inNetwork",
      title: "In-network insurance list",
      description: "Add or remove the insurance plans shown as tags.",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "billingHeading", title: "Billing subheading", type: "string" }),
    defineField({ name: "billingText", title: "Billing details", type: "text", rows: 4 }),
    defineField({ name: "goodFaithHeading", title: "Good Faith Estimate heading", type: "string" }),
    defineField({ name: "goodFaithText", title: "Good Faith Estimate text", type: "text", rows: 5 }),
    defineField({ name: "ctaHeading", title: "Closing call-to-action heading", type: "string" }),
    defineField({ name: "ctaButtonLabel", title: "Closing button label", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Services Page" }) },
});
