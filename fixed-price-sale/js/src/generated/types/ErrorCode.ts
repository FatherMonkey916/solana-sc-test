/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
/**
 * @category enums
 * @category generated
 */
export enum ErrorCode {
  NoValidSignerPresent,
  StringIsTooLong,
  NameIsTooLong,
  DescriptionIsTooLong,
  SupplyIsGtThanAvailable,
  SupplyIsNotProvided,
  DerivedKeyInvalid,
  SellingResourceOwnerInvalid,
  PublicKeyMismatch,
  PiecesInOneWalletIsTooMuch,
  StartDateIsInPast,
  EndDateIsEarlierThanBeginDate,
  IncorrectOwner,
  MarketIsNotStarted,
  MarketIsEnded,
  UserReachBuyLimit,
  MathOverflow,
  SupplyIsGtThanMaxSupply,
  MarketDurationIsNotUnlimited,
  MarketIsSuspended,
  MarketIsImmutable,
  MarketInInvalidState,
  PriceIsZero,
  FunderIsInvalid,
  PayoutTicketExists,
  InvalidFunderDestination,
  TreasuryIsNotEmpty,
  SellingResourceInInvalidState,
  MetadataCreatorsIsEmpty,
  UserWalletMustMatchUserTokenAccount,
  MetadataShouldBeMutable,
  PrimarySaleIsNotAllowed,
  CreatorsIsGtThanAvailable,
  CreatorsIsEmpty,
  MarketOwnerDoesntHaveShares,
  PrimaryMetadataCreatorsNotProvided,
  GatingTokenMissing,
  InvalidOwnerForGatingToken,
  WrongGatingMetadataAccount,
  WrongOwnerInTokenGatingAcc,
  WrongGatingDate,
  CollectionMintMissing,
  WrongCollectionMintKey,
  WrongGatingToken,
}

/**
 * @category userTypes
 * @category generated
 */
export const errorCodeBeet = beet.fixedScalarEnum(ErrorCode) as beet.FixedSizeBeet<
  ErrorCode,
  ErrorCode
>;
