/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * AssetOwnerMismatch: 'Asset Owner Does not match'
 *
 * @category Errors
 * @category generated
 */
export class AssetOwnerMismatchError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'AssetOwnerMismatch'
  constructor() {
    super('Asset Owner Does not match')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AssetOwnerMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new AssetOwnerMismatchError())
createErrorFromNameLookup.set(
  'AssetOwnerMismatch',
  () => new AssetOwnerMismatchError()
)

/**
 * PublicKeyMismatch: 'PublicKeyMismatch'
 *
 * @category Errors
 * @category generated
 */
export class PublicKeyMismatchError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'PublicKeyMismatch'
  constructor() {
    super('PublicKeyMismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PublicKeyMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new PublicKeyMismatchError())
createErrorFromNameLookup.set(
  'PublicKeyMismatch',
  () => new PublicKeyMismatchError()
)

/**
 * HashingMismatch: 'Hashing Mismatch Within Leaf Schema'
 *
 * @category Errors
 * @category generated
 */
export class HashingMismatchError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'HashingMismatch'
  constructor() {
    super('Hashing Mismatch Within Leaf Schema')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, HashingMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new HashingMismatchError())
createErrorFromNameLookup.set(
  'HashingMismatch',
  () => new HashingMismatchError()
)

/**
 * UnsupportedSchemaVersion: 'Unsupported Schema Version'
 *
 * @category Errors
 * @category generated
 */
export class UnsupportedSchemaVersionError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'UnsupportedSchemaVersion'
  constructor() {
    super('Unsupported Schema Version')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnsupportedSchemaVersionError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new UnsupportedSchemaVersionError())
createErrorFromNameLookup.set(
  'UnsupportedSchemaVersion',
  () => new UnsupportedSchemaVersionError()
)

/**
 * CreatorShareTotalMustBe100: 'Creator shares must sum to 100'
 *
 * @category Errors
 * @category generated
 */
export class CreatorShareTotalMustBe100Error extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'CreatorShareTotalMustBe100'
  constructor() {
    super('Creator shares must sum to 100')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CreatorShareTotalMustBe100Error)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1774,
  () => new CreatorShareTotalMustBe100Error()
)
createErrorFromNameLookup.set(
  'CreatorShareTotalMustBe100',
  () => new CreatorShareTotalMustBe100Error()
)

/**
 * DuplicateCreatorAddress: 'No duplicate creator addresses in metadata'
 *
 * @category Errors
 * @category generated
 */
export class DuplicateCreatorAddressError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'DuplicateCreatorAddress'
  constructor() {
    super('No duplicate creator addresses in metadata')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicateCreatorAddressError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new DuplicateCreatorAddressError())
createErrorFromNameLookup.set(
  'DuplicateCreatorAddress',
  () => new DuplicateCreatorAddressError()
)

/**
 * CreatorDidNotVerify: 'Creator did not verify the metadata'
 *
 * @category Errors
 * @category generated
 */
export class CreatorDidNotVerifyError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'CreatorDidNotVerify'
  constructor() {
    super('Creator did not verify the metadata')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CreatorDidNotVerifyError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new CreatorDidNotVerifyError())
createErrorFromNameLookup.set(
  'CreatorDidNotVerify',
  () => new CreatorDidNotVerifyError()
)

/**
 * CreatorNotFound: 'Creator not found in creator Vec'
 *
 * @category Errors
 * @category generated
 */
export class CreatorNotFoundError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'CreatorNotFound'
  constructor() {
    super('Creator not found in creator Vec')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CreatorNotFoundError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new CreatorNotFoundError())
createErrorFromNameLookup.set(
  'CreatorNotFound',
  () => new CreatorNotFoundError()
)

/**
 * NoCreatorsPresent: 'No creators in creator Vec'
 *
 * @category Errors
 * @category generated
 */
export class NoCreatorsPresentError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'NoCreatorsPresent'
  constructor() {
    super('No creators in creator Vec')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoCreatorsPresentError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new NoCreatorsPresentError())
createErrorFromNameLookup.set(
  'NoCreatorsPresent',
  () => new NoCreatorsPresentError()
)

/**
 * CreatorHashMismatch: 'User-provided creator Vec must result in same user-provided creator hash'
 *
 * @category Errors
 * @category generated
 */
export class CreatorHashMismatchError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'CreatorHashMismatch'
  constructor() {
    super(
      'User-provided creator Vec must result in same user-provided creator hash'
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CreatorHashMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new CreatorHashMismatchError())
createErrorFromNameLookup.set(
  'CreatorHashMismatch',
  () => new CreatorHashMismatchError()
)

/**
 * DataHashMismatch: 'User-provided metadata must result in same user-provided data hash'
 *
 * @category Errors
 * @category generated
 */
export class DataHashMismatchError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'DataHashMismatch'
  constructor() {
    super('User-provided metadata must result in same user-provided data hash')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DataHashMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new DataHashMismatchError())
createErrorFromNameLookup.set(
  'DataHashMismatch',
  () => new DataHashMismatchError()
)

/**
 * CreatorsTooLong: 'Creators list too long'
 *
 * @category Errors
 * @category generated
 */
export class CreatorsTooLongError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'CreatorsTooLong'
  constructor() {
    super('Creators list too long')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CreatorsTooLongError)
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new CreatorsTooLongError())
createErrorFromNameLookup.set(
  'CreatorsTooLong',
  () => new CreatorsTooLongError()
)

/**
 * MetadataNameTooLong: 'Name in metadata is too long'
 *
 * @category Errors
 * @category generated
 */
export class MetadataNameTooLongError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'MetadataNameTooLong'
  constructor() {
    super('Name in metadata is too long')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MetadataNameTooLongError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new MetadataNameTooLongError())
createErrorFromNameLookup.set(
  'MetadataNameTooLong',
  () => new MetadataNameTooLongError()
)

/**
 * MetadataSymbolTooLong: 'Symbol in metadata is too long'
 *
 * @category Errors
 * @category generated
 */
export class MetadataSymbolTooLongError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'MetadataSymbolTooLong'
  constructor() {
    super('Symbol in metadata is too long')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MetadataSymbolTooLongError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new MetadataSymbolTooLongError())
createErrorFromNameLookup.set(
  'MetadataSymbolTooLong',
  () => new MetadataSymbolTooLongError()
)

/**
 * MetadataUriTooLong: 'Uri in metadata is too long'
 *
 * @category Errors
 * @category generated
 */
export class MetadataUriTooLongError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'MetadataUriTooLong'
  constructor() {
    super('Uri in metadata is too long')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MetadataUriTooLongError)
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new MetadataUriTooLongError())
createErrorFromNameLookup.set(
  'MetadataUriTooLong',
  () => new MetadataUriTooLongError()
)

/**
 * MetadataBasisPointsTooHigh: 'Basis points in metadata cannot exceed 10000'
 *
 * @category Errors
 * @category generated
 */
export class MetadataBasisPointsTooHighError extends Error {
  readonly code: number = 0x177f
  readonly name: string = 'MetadataBasisPointsTooHigh'
  constructor() {
    super('Basis points in metadata cannot exceed 10000')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MetadataBasisPointsTooHighError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x177f,
  () => new MetadataBasisPointsTooHighError()
)
createErrorFromNameLookup.set(
  'MetadataBasisPointsTooHigh',
  () => new MetadataBasisPointsTooHighError()
)

/**
 * TreeAuthorityIncorrect: 'Tree creator or tree delegate must sign.'
 *
 * @category Errors
 * @category generated
 */
export class TreeAuthorityIncorrectError extends Error {
  readonly code: number = 0x1780
  readonly name: string = 'TreeAuthorityIncorrect'
  constructor() {
    super('Tree creator or tree delegate must sign.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TreeAuthorityIncorrectError)
    }
  }
}

createErrorFromCodeLookup.set(0x1780, () => new TreeAuthorityIncorrectError())
createErrorFromNameLookup.set(
  'TreeAuthorityIncorrect',
  () => new TreeAuthorityIncorrectError()
)

/**
 * InsufficientMintCapacity: 'Not enough unapproved mints left'
 *
 * @category Errors
 * @category generated
 */
export class InsufficientMintCapacityError extends Error {
  readonly code: number = 0x1781
  readonly name: string = 'InsufficientMintCapacity'
  constructor() {
    super('Not enough unapproved mints left')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InsufficientMintCapacityError)
    }
  }
}

createErrorFromCodeLookup.set(0x1781, () => new InsufficientMintCapacityError())
createErrorFromNameLookup.set(
  'InsufficientMintCapacity',
  () => new InsufficientMintCapacityError()
)

/**
 * NumericalOverflowError: 'NumericalOverflowError'
 *
 * @category Errors
 * @category generated
 */
export class NumericalOverflowErrorError extends Error {
  readonly code: number = 0x1782
  readonly name: string = 'NumericalOverflowError'
  constructor() {
    super('NumericalOverflowError')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NumericalOverflowErrorError)
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new NumericalOverflowErrorError())
createErrorFromNameLookup.set(
  'NumericalOverflowError',
  () => new NumericalOverflowErrorError()
)

/**
 * IncorrectOwner: 'Incorrect account owner'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectOwnerError extends Error {
  readonly code: number = 0x1783
  readonly name: string = 'IncorrectOwner'
  constructor() {
    super('Incorrect account owner')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectOwnerError)
    }
  }
}

createErrorFromCodeLookup.set(0x1783, () => new IncorrectOwnerError())
createErrorFromNameLookup.set('IncorrectOwner', () => new IncorrectOwnerError())

/**
 * CollectionCannotBeVerifiedInThisInstruction: 'Cannot Verify Collection in this Instruction'
 *
 * @category Errors
 * @category generated
 */
export class CollectionCannotBeVerifiedInThisInstructionError extends Error {
  readonly code: number = 0x1784
  readonly name: string = 'CollectionCannotBeVerifiedInThisInstruction'
  constructor() {
    super('Cannot Verify Collection in this Instruction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(
        this,
        CollectionCannotBeVerifiedInThisInstructionError
      )
    }
  }
}

createErrorFromCodeLookup.set(
  0x1784,
  () => new CollectionCannotBeVerifiedInThisInstructionError()
)
createErrorFromNameLookup.set(
  'CollectionCannotBeVerifiedInThisInstruction',
  () => new CollectionCannotBeVerifiedInThisInstructionError()
)

/**
 * CollectionNotFound: 'Collection Not Found on Metadata'
 *
 * @category Errors
 * @category generated
 */
export class CollectionNotFoundError extends Error {
  readonly code: number = 0x1785
  readonly name: string = 'CollectionNotFound'
  constructor() {
    super('Collection Not Found on Metadata')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CollectionNotFoundError)
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new CollectionNotFoundError())
createErrorFromNameLookup.set(
  'CollectionNotFound',
  () => new CollectionNotFoundError()
)

/**
 * AlreadyVerified: 'Collection item is already verified.'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyVerifiedError extends Error {
  readonly code: number = 0x1786
  readonly name: string = 'AlreadyVerified'
  constructor() {
    super('Collection item is already verified.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyVerifiedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new AlreadyVerifiedError())
createErrorFromNameLookup.set(
  'AlreadyVerified',
  () => new AlreadyVerifiedError()
)

/**
 * AlreadyUnverified: 'Collection item is already unverified.'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyUnverifiedError extends Error {
  readonly code: number = 0x1787
  readonly name: string = 'AlreadyUnverified'
  constructor() {
    super('Collection item is already unverified.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyUnverifiedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1787, () => new AlreadyUnverifiedError())
createErrorFromNameLookup.set(
  'AlreadyUnverified',
  () => new AlreadyUnverifiedError()
)

/**
 * UpdateAuthorityIncorrect: 'Incorrect leaf metadata update authority.'
 *
 * @category Errors
 * @category generated
 */
export class UpdateAuthorityIncorrectError extends Error {
  readonly code: number = 0x1788
  readonly name: string = 'UpdateAuthorityIncorrect'
  constructor() {
    super('Incorrect leaf metadata update authority.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UpdateAuthorityIncorrectError)
    }
  }
}

createErrorFromCodeLookup.set(0x1788, () => new UpdateAuthorityIncorrectError())
createErrorFromNameLookup.set(
  'UpdateAuthorityIncorrect',
  () => new UpdateAuthorityIncorrectError()
)

/**
 * LeafAuthorityMustSign: 'This transaction must be signed by either the leaf owner or leaf delegate'
 *
 * @category Errors
 * @category generated
 */
export class LeafAuthorityMustSignError extends Error {
  readonly code: number = 0x1789
  readonly name: string = 'LeafAuthorityMustSign'
  constructor() {
    super(
      'This transaction must be signed by either the leaf owner or leaf delegate'
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, LeafAuthorityMustSignError)
    }
  }
}

createErrorFromCodeLookup.set(0x1789, () => new LeafAuthorityMustSignError())
createErrorFromNameLookup.set(
  'LeafAuthorityMustSign',
  () => new LeafAuthorityMustSignError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
