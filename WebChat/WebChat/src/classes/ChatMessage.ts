export class ChatMessage {

    constructor(public from: string,public to: string, public content: string, public delivery_time: Date) { }
}