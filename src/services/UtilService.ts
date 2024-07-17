
export function valid(amount: string, decimals: number): boolean {
  const regex = new RegExp(`^\\d+${decimals > 0 ? `(\\.\\d{1,${decimals}})?` : ''}$`);
  return regex.test(amount);
}

export function units(coinsValue: string, decimals: number): string {
  if (!valid(coinsValue, decimals)) throw new Error('Invalid amount');
  let i = coinsValue.indexOf('.');
  if (i < 0) i = coinsValue.length;
  const s = coinsValue.slice(i + 1);
  return coinsValue.slice(0, i) + s + '0'.repeat(decimals - s.length);
}

export function coins(unitsValue: string, decimals: number): string {
  if (!valid(unitsValue, 0)) throw new Error('Invalid amount');
  if (decimals === 0) return unitsValue;
  const s = unitsValue.padStart(1 + decimals, '0');
  return `${s.slice(0, -decimals)}.${s.slice(-decimals)}`;
}

export function formatShortAddress(addressFormat: string): string {
  return `${addressFormat.slice(0, 6)}...${addressFormat.slice(-6)}`;
}

export function formatShortAddressDescriptionNft(addressFormat: string): string {
  return `${addressFormat.slice(0, 9)}...`;
}

export function formatShortAddressWallet(addressFormat: string): string {
  return `${addressFormat.slice(0, 9)}`;
}

export function dollarFormat(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function formatSymbol(tokenSymbol: string) {
  return tokenSymbol.length > 6 ? `${tokenSymbol.substr(0, 6)}...` : tokenSymbol;
}

export function formatDomain(domain: string) {
  const domainName = domain.substr(0, domain.lastIndexOf('.'));
  const domainType = domain.substr(domain.lastIndexOf('.'));
  const formattedName = domainName.length > 9 ? `${domainName.substr(0, 3)}...${domainName.substr(-3)}` : domainName;

  return `${formattedName}${domainType}`;
}

export const sleep = (ms = 100): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const hashcode = (value: string): number => {
  let hash = 0, chr;
  if (value.length === 0) return hash;
  for (let i = 0; i < value.length; i++) {
    chr = value.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  hash = hash & 0xfffffff;
  return hash;
}