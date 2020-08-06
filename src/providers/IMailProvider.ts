interface IAdrress {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAdrress;
    from: IAdrress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
}