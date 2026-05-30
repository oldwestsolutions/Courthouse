export const LEGAL_DOMAIN = "courthouse.legal";
export const IT_DOMAIN = "courthouse.it.com";

export const LEGAL_URL = `https://${LEGAL_DOMAIN}`;
export const IT_URL = `https://${IT_DOMAIN}`;

export function normalizeHostname(host: string): string {
  return host.split(":")[0].toLowerCase();
}

export function isItDomain(hostname: string): boolean {
  const h = normalizeHostname(hostname);
  return h === IT_DOMAIN || h === `www.${IT_DOMAIN}` || h === "it.localhost";
}

export function isLegalDomain(hostname: string): boolean {
  const h = normalizeHostname(hostname);
  return (
    h === LEGAL_DOMAIN ||
    h === `www.${LEGAL_DOMAIN}` ||
    h === "localhost" ||
    h === "127.0.0.1"
  );
}
