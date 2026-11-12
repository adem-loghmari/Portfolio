// Address that the "Email me" buttons use. Change it here only.
export const CONTACT_EMAIL = "hmidaloghmariadam@gmail.com";

const subject = "Project inquiry from your portfolio";
const body = [
  "Hi Adam,",
  "",
  "I came across your portfolio and would like to talk about a project.",
  "",
  "Company:",
  "What we need built:",
  "Timeline:",
  "",
  "Best regards,",
].join("\n");

export const hireMeHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
