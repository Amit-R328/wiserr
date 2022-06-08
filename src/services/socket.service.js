import io from 'socket.io-client'
import { userService } from './user.service'

export const SOCKET_EMIT_LEAVE = 'leave';
export const SOCKET_EMIT_JOIN_IS_CONNECTED = 'join isConnected';
export const SOCKET_EMIT_JOIN = 'join';
export const SOCKET_EMIT_USER_OFFLINE = 'user-offline';
export const SOCKET_EMIT_USER_ONLINE = 'user-online';
export const SOCKET_EMIT_USER_WATCH = 'user-watch';
export const SOCKET_EMIT_LOGIN = 'set-user-socket';
export const SOCKET_EMIT_LOGOUT = 'unset-user-socket';
export const SOCKET_EMIT_USER_CONNECTED = 'user-connected';
export const SOCKET_EMIT_ADD_REVIEW = 'add-review'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

socketService.setup()

function createSocketService() {
  var socket = null;
  const socketService = {
    setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    leave(room) {
      socket.leave(room)
    },
    off(eventName, cb = null) {
      if (!socket) return;
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    }
  }
  return socketService
}

