interface ITEstimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  email: string;
}

export const testimonials: ITEstimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    title: "CEO",
    company: "Tech Innovators Inc.",
    testimonial:
      "Working with this consulting firm transformed our business. Their strategic insights and hands-on approach helped us achieve unprecedented growth.",
    email: "maxwellKelechi@gmail.com",
  },
];
