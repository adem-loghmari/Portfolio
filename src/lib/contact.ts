// Address that "Hire Me" emails. Change it here only.
export const CONTACT_EMAIL = "hmidaloghmariadam@gmail.com";

const subject = "Hiring inquiry from your portfolio";
const body = [
  "Hi Adam,",
  "",
  "I came across your portfolio and would like to talk about a role.",
  "",
  "Company:",
  "Role:",
  "Location / remote policy:",
  "",
  "Best regards,",
].join("\n");

export const hireMeHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
