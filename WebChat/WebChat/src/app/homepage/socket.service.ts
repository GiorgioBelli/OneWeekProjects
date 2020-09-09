import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SocketResponse } from 'src/classes/SocketResponse';
import { ChatMessage } from 'src/classes/ChatMessage';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  

  socket = null;

  connected: boolean = false;

  constructor() {

  }
  
  setupConnection() {
    return new Observable<boolean>(
      observer => {
        this.socket = io.connect(environment.SOCKET_ENDPOINT);

        this.socket.on('connect', () => observer.next(true));
      });
  }

  sendPrivateMessage(msg: ChatMessage) {
    this.socket.emit('add-message',msg);
  }

  getId(){
    this.socket.emit('my id',null);
  }


  getMessages() {
    let observable = new Observable(observer => {

      this.socket.on("broadcast message", (response) => {
        observer.next(response);
      });

      this.socket.on("personal message", (response) => {
        observer.next(response);
      });

      this.socket.on("my id", (response) => {
        observer.next(response);
      });
      
      return () => {
        this.socket.disconnect();
      };

    })
    return observable;
  }


}
