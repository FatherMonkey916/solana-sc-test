/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { ConfigLine, configLineBeet } from '../types/ConfigLine';

/**
 * @category Instructions
 * @category AddConfigLines
 * @category generated
 */
export type AddConfigLinesInstructionArgs = {
  index: number;
  configLines: ConfigLine[];
};
/**
 * @category Instructions
 * @category AddConfigLines
 * @category generated
 */
const addConfigLinesStruct = new beet.FixableBeetArgsStruct<
  AddConfigLinesInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['index', beet.u32],
    ['configLines', beet.array(configLineBeet)],
  ],
  'AddConfigLinesInstructionArgs',
);
/**
 * Accounts required by the _addConfigLines_ instruction
 * @category Instructions
 * @category AddConfigLines
 * @category generated
 */
export type AddConfigLinesInstructionAccounts = {
  candyMachine: web3.PublicKey;
  authority: web3.PublicKey;
};

const addConfigLinesInstructionDiscriminator = [223, 50, 224, 227, 151, 8, 115, 106];

/**
 * Creates a _AddConfigLines_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AddConfigLines
 * @category generated
 */
export function createAddConfigLinesInstruction(
  accounts: AddConfigLinesInstructionAccounts,
  args: AddConfigLinesInstructionArgs,
) {
  const { candyMachine, authority } = accounts;

  const [data] = addConfigLinesStruct.serialize({
    instructionDiscriminator: addConfigLinesInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ'),
    keys,
    data,
  });
  return ix;
}
