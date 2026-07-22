// Single source of truth for booking links.
// Live Calendly account: Nicole Bishop (ageofintellect@gmail.com).
// Every "Book" button on the site reads from these constants.
export const CALENDLY_URL = 'https://calendly.com/ageofintellect';

// Direct per-class booking links (Calendly event types).
export const CALENDLY_EVENTS: Record<string, string> = {
  'Prenatal Pilates': `${CALENDLY_URL}/prenatal-pilates`,
  'Postpartum Restore': `${CALENDLY_URL}/postpartum-restore`,
  'Mommy & Me': `${CALENDLY_URL}/mommy-me-pilates`,
  'Power Pilates': `${CALENDLY_URL}/power-pilates`,
  'Private Sessions': `${CALENDLY_URL}/private-session`,
};
