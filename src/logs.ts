import ws from 'ws'
import debug from 'debug'

export type Socket = ws

let debugLog = debug('hoprd')

const MAX_MESSAGES_CACHED = 100

// 
// @implements LoggerService of nestjs
export class LogStream {
  private messages: string[] = []
  private connections: Socket[] = []

  constructor(){
  }

  subscribe(sock: Socket){
    this.connections.push(sock);
    sock.send(this.messages.join('\n'))
  }

  log(...args: string[]){
    const msg = `[${new Date().toISOString()}] ${args.join(' ')}`
    this._log(msg)
  }

  error(message: string, trace: string) {
    this.log(message)
  }

  warn(message: string) {
    this.log('WARN', message)
  }

  debug(message: string) {
    this.log('DEBUG', message)
  }

  verbose(message: string) {
    this.log('VERBOSE', message)
  }

  logFullLine(...args: string[]){
    const msg = `${args.join(' ')}`
    this._log(msg)
  }

  _log(msg: string){
    debugLog(msg) 
    this.messages.push(msg)
    if (this.messages.length > MAX_MESSAGES_CACHED){ // Avoid memory leak
      this.messages.splice(0, this.messages.length - MAX_MESSAGES_CACHED); // delete elements from start
    }
    this.connections.forEach((conn: Socket, i: number) => {
      if (conn.readyState == ws.OPEN) {
        conn.send(msg)
      } else {
        // Handle bad connections:
        if (conn.readyState !== ws.CONNECTING) {
          // Only other possible states are closing or closed
          this.connections.splice(i, 1)
        }

      }
    })
  }
}

