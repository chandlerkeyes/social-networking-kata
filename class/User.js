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

    viewWall() {
        return ["I love the fall", "Not looking forward to winter"]
    }
}