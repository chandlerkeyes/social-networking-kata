import moment from 'moment'

export default class User {
    constructor() {
        this.posts = [] // Array of posts, includes a message and a timeStamp
        this.follows = []; // Array of Users
    }

    getPosts() {
        return this.posts;
    }

    publish(message) {
        const timeStamp = moment()
        const post = {
            message,
            timeStamp
        };
        this.posts.push(post);
    }

    follow(User) {
        this.follows.push(User);
    }


    viewWall(User) {
        return User.viewTimeline()
    }

    sortByTimePosted(posts) {
        const sortedPosts = posts.sort((a, b) => {
            return moment(a.timeStamp).isAfter(b.timeStamp);
        });

        return sortedPosts.map((post) => {
            return post.message
        })
    }

    viewTimeline() {
        let allPosts = this.getPosts();
        const friends = this.follows;

        friends.map((User) => {
            const friendsPosts = User.getPosts();
            allPosts = allPosts.concat(friendsPosts);
        });

        return this.sortByTimePosted(allPosts);
    }
}