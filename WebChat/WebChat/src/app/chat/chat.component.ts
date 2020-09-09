import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SocketService } from '../homepage/socket.service';
import { SocketResponse } from 'src/classes/SocketResponse';
import { User } from 'src/classes/User';
import { ChatMessage } from 'src/classes/ChatMessage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  interlocutor_id:string = null;
  user:User;
  
  messages: ChatMessage[];
  counter:number = 0;

  connection;

  new_text:string;

  constructor(private route:ActivatedRoute, private router: Router,private socketService:SocketService) {
    this.user = new User("");
    this.messages = [];
  }
  

  getSocketId() {
    this.socketService.getId();
  }

  
  sendPrivateMessage(msg: ChatMessage){
    this.messages.push(msg)
    this.socketService.sendPrivateMessage(msg);
  }
 
  ngOnInit(): void {
    if(this.socketService.socket == null){
      this.router.navigate([``], { relativeTo: this.route });
      return;
    }

    this.user.socket_code = this.socketService.socket.id

    this.route.paramMap.subscribe(params => {
      this.interlocutor_id = params.get('id');
    });

    this.connection = this.socketService.getMessages().subscribe((response: SocketResponse) => {

      switch (response.message_sign) {
        case "personal message":
          console.log("ricevuto un messaggio"+response.message_body);
          
          this.messages.push(<ChatMessage>JSON.parse(response.message_body));
          break;
        default:
          console.log("firma non valida");
          
          break;
      }

    })

  }

  onSendClick(){
    this.sendPrivateMessage(new ChatMessage(this.socketService.socket.id, this.interlocutor_id,this.new_text,new Date()));
    this.new_text = "";
  }
  
  ngOnDestroy(): void {
    if(this.connection == null) {
      this.router.navigate([``], { relativeTo: this.route });
      return;
    }
    this.connection.unsubscribe();
  }

}
