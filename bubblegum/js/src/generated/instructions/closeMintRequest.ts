/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CloseMintRequest
 * @category generated
 */
export const closeMintRequestStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseMintRequestInstructionArgs'
)
/**
 * Accounts required by the _closeMintRequest_ instruction
 *
 * @property [_writable_] mintAuthorityRequest
 * @property [_writable_, **signer**] mintAuthority
 * @property [_writable_] treeAuthority
 * @property [] merkleSlab
 * @category Instructions
 * @category CloseMintRequest
 * @category generated
 */
export type CloseMintRequestInstructionAccounts = {
  mintAuthorityRequest: web3.PublicKey
  mintAuthority: web3.PublicKey
  treeAuthority: web3.PublicKey
  merkleSlab: web3.PublicKey
}

export const closeMintRequestInstructionDiscriminator = [
  110, 107, 165, 251, 73, 53, 214, 194,
]

/**
 * Creates a _CloseMintRequest_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CloseMintRequest
 * @category generated
 */
export function createCloseMintRequestInstruction(
  accounts: CloseMintRequestInstructionAccounts,
  programId = new web3.PublicKey('BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY')
) {
  const [data] = closeMintRequestStruct.serialize({
    instructionDiscriminator: closeMintRequestInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintAuthorityRequest,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mintAuthority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.treeAuthority,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.merkleSlab,
      isWritable: false,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
