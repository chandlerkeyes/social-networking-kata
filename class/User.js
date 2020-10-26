export default class User {
    constructor() {
        this.messages = []
        this.follows = []; // Array of Users
    }
    getPosts() {
        return this.messages;
    }
    viewTimeline() {
        const posts = []
        if (this.follows.length > 0) {
            this.follows.map((User) => {
                const userPosts = User.getPosts()
                userPosts.map((message) => {
                    posts.push(message)
                })
            })
            return posts
        }
        return this.getPosts()
    }

    publish(message) {
        this.messages.push(message)
    }

    viewWall(User) {
        return User.viewTimeline()
    }

    follow(User) {
        this.follows.push(User);
    }
}