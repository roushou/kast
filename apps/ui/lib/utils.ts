import { getAddress } from "viem";

/**
 * Returns the checksummed address if the address is valid, otherwise returns `false``
 */
export function isAddress(value: string | undefined): string | false {
  if (!value) {
    return false;
  }
  try {
    return getAddress(value.toLowerCase());
  } catch {
    return false;
  }
}

export function shortenAddress(
  address: string | undefined,
  charsStart = 4,
  charsEnd = 4,
): string {
  const parsed = isAddress(address);
  if (!parsed) {
    return "";
  }
  return ellipseAddressAdd0x(parsed, charsStart, charsEnd);
}

/**
 * Shorten an address and add 0x to the start if missing
 * @param targetAddress
 * @param charsStart amount of character to shorten (from both ends / in the beginning)
 * @param charsEnd amount of characters to shorten in the end
 * @returns formatted string
 */
function ellipseAddressAdd0x(
  targetAddress: string,
  charsStart = 4,
  charsEnd = 4,
): string {
  const hasPrefix = targetAddress.startsWith("0x");
  const prefix = hasPrefix ? "" : "0x";
  return ellipseMiddle(prefix + targetAddress, charsStart + 2, charsEnd);
}

/**
 * Shorten a string with "..." in the middle
 * @param target
 * @param charsStart amount of character to shorten (from both ends / in the beginning)
 * @param charsEnd amount of characters to shorten in the end
 * @returns formatted string
 */
export function ellipseMiddle(
  target: string,
  charsStart = 4,
  charsEnd = 4,
): string {
  return `${target.slice(0, charsStart)}...${target.slice(target.length - charsEnd)}`;
}
