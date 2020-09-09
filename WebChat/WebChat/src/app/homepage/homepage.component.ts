import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/classes/User';
import { SocketService } from './socket.service';
import { SocketResponse } from 'src/classes/SocketResponse';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ChatMessage } from 'src/classes/ChatMessage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  code: string;
  user: User;

  connection;
  connected: boolean;


  constructor(private route: ActivatedRoute, private router: Router, private socketService: SocketService) { }


  getSocketId() {
    this.socketService.getId();
  }

  ngOnInit() {
    this.user = new User("pippo");

    this.connection = this.socketService.setupConnection().subscribe(
      ret => {
        this.connected = ret;
        this.user.socket_code = this.socketService.socket.id;
      }
    );

  }

  onStartClick() {
    this.router.navigate([`chat/${this.code}`], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
