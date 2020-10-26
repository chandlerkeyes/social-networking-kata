export default class User {
    constructor() {
        this.messages = []
    }
    viewTimeline() {
        return this.messages
    }

    publish(message) {
        this.messages.push(message)
    }
}