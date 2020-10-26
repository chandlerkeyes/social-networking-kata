import moment from 'moment'

export default class User {
    constructor() {
        this.posts = []
        this.follows = []; // Array of Users
    }

    getPosts() {
        return this.posts;
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

    publish(message) {
        const timeStamp = moment()
        const post = {
            message,
            timeStamp
        };
        this.posts.push(post);
    }


    viewWall(User) {
        return User.viewTimeline()
    }

    follow(User) {
        this.follows.push(User);
    }
}