import type Hopr from '@hoprnet/hopr-core'
import { styleValue } from './utils/index.js'
import { AbstractCommand } from './abstractCommand.js'

export default class RedeemTickets extends AbstractCommand {
  constructor(public node: Hopr) {
    super()
  }

  public name() {
    return 'redeemTickets'
  }

  public help() {
    return 'Redeems your tickets'
  }

  /**
   * @param query a ticket challange
   */
  public async execute(log: (str: string) => void): Promise<void> {
    try {
      log('Redeeming all tickets...')
      await this.node.redeemAllTickets()
      log(`Redeemed all tickets. Run 'tickets' for details`)
    } catch (err) {
      return log(styleValue(err instanceof Error ? err.message : 'Unknown error', 'failure'))
    }
  }
}
