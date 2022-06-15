/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map();
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map();

/**
 * BumpSeedNotInHashMap: 'Bump seed not in hash map'
 *
 * @category Errors
 * @category generated
 */
export class BumpSeedNotInHashMapError extends Error {
  readonly code: number = 0x1770;
  readonly name: string = 'BumpSeedNotInHashMap';
  constructor() {
    super('Bump seed not in hash map');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BumpSeedNotInHashMapError);
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new BumpSeedNotInHashMapError());
createErrorFromNameLookup.set('BumpSeedNotInHashMap', () => new BumpSeedNotInHashMapError());

/**
 * AuctionNotStarted: 'Auction has not started yet'
 *
 * @category Errors
 * @category generated
 */
export class AuctionNotStartedError extends Error {
  readonly code: number = 0x1771;
  readonly name: string = 'AuctionNotStarted';
  constructor() {
    super('Auction has not started yet');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AuctionNotStartedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new AuctionNotStartedError());
createErrorFromNameLookup.set('AuctionNotStarted', () => new AuctionNotStartedError());

/**
 * AuctionEnded: 'Auction has ended'
 *
 * @category Errors
 * @category generated
 */
export class AuctionEndedError extends Error {
  readonly code: number = 0x1772;
  readonly name: string = 'AuctionEnded';
  constructor() {
    super('Auction has ended');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AuctionEndedError);
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new AuctionEndedError());
createErrorFromNameLookup.set('AuctionEnded', () => new AuctionEndedError());

/**
 * AuctionActive: 'Auction has not ended yet'
 *
 * @category Errors
 * @category generated
 */
export class AuctionActiveError extends Error {
  readonly code: number = 0x1773;
  readonly name: string = 'AuctionActive';
  constructor() {
    super('Auction has not ended yet');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AuctionActiveError);
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new AuctionActiveError());
createErrorFromNameLookup.set('AuctionActive', () => new AuctionActiveError());

/**
 * BidTooLow: 'The bid was lower than the highest bid'
 *
 * @category Errors
 * @category generated
 */
export class BidTooLowError extends Error {
  readonly code: number = 0x1774;
  readonly name: string = 'BidTooLow';
  constructor() {
    super('The bid was lower than the highest bid');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BidTooLowError);
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new BidTooLowError());
createErrorFromNameLookup.set('BidTooLow', () => new BidTooLowError());

/**
 * SignerNotAuth: 'The signer must be the Auction House authority'
 *
 * @category Errors
 * @category generated
 */
export class SignerNotAuthError extends Error {
  readonly code: number = 0x1775;
  readonly name: string = 'SignerNotAuth';
  constructor() {
    super('The signer must be the Auction House authority');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, SignerNotAuthError);
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new SignerNotAuthError());
createErrorFromNameLookup.set('SignerNotAuth', () => new SignerNotAuthError());

/**
 * NotHighestBidder: 'Execute Sale must be run on the highest bidder'
 *
 * @category Errors
 * @category generated
 */
export class NotHighestBidderError extends Error {
  readonly code: number = 0x1776;
  readonly name: string = 'NotHighestBidder';
  constructor() {
    super('Execute Sale must be run on the highest bidder');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotHighestBidderError);
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new NotHighestBidderError());
createErrorFromNameLookup.set('NotHighestBidder', () => new NotHighestBidderError());

/**
 * BelowReservePrice: 'The bid price must be greater than the reserve price'
 *
 * @category Errors
 * @category generated
 */
export class BelowReservePriceError extends Error {
  readonly code: number = 0x1777;
  readonly name: string = 'BelowReservePrice';
  constructor() {
    super('The bid price must be greater than the reserve price');
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, BelowReservePriceError);
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new BelowReservePriceError());
createErrorFromNameLookup.set('BelowReservePrice', () => new BelowReservePriceError());

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
