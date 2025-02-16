import type Hopr from '@hoprnet/hopr-core'
import { AbstractCommand } from './abstractCommand.js'
import { styleValue } from './utils/index.js'

export default class Tickets extends AbstractCommand {
  constructor(public node: Hopr) {
    super()
  }

  public name() {
    return 'tickets'
  }

  public help() {
    return 'Displays information about your redeemed and unredeemed tickets'
  }

  public async execute(log): Promise<void> {
    log('finding information about tickets...')
    try {
      const stats = await this.node.getTicketStatistics()
      log(`
Tickets:
- Pending:          ${stats.pending}
- Unredeemed:       ${stats.unredeemed}
- Unredeemed Value: ${stats.unredeemedValue.toFormattedString()}
- Redeemed:         ${stats.redeemed}
- Redeemed Value:   ${stats.redeemedValue.toFormattedString()}
- Losing Tickets:   ${stats.losing}
- Win Proportion:   ${stats.winProportion * 100}% 
- Neglected:        ${stats.neglected} 
- Rejected:         ${stats.rejected}
- Rejected Value:   ${stats.rejectedValue.toFormattedString()}
          `)
    } catch (err) {
      log(styleValue(err instanceof Error ? err.message : 'Unknown error', 'failure'))
    }
  }
}
