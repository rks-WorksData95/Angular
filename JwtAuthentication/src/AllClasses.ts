export class UserInfo{
    constructor(
        public firstName: String,
        public lastName: String,
        public emailId: String,
        public username: String,
        public password: String
    ){}
}

export class SignInUsers{
    constructor(
        public username: string,
        public password: string
    ){}
}

export class Message{
    constructor(
        public message: String
    ){}
}