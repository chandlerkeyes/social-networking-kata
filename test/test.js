import { expect } from 'chai'
import User from '../class/User'

describe("Social Networking Kata Tests", () => {
    describe("Publishing", () => {
        it("Alice views blank timeline", () => {
            const alice = new User()

            const result = alice.viewTimeline()
            const expectedResult = []

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Alice published "I love the weather today", when she views her timeline, she sees "I love the weather today"`, () => {
            const alice = new User()
            const message = "I love the weather today"

            alice.publish(message)

            const result = alice.viewTimeline();
            const expectedResult = [message]

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Bob published "It's cold outside", when he views his timeline, he sees "It's cold outside"`, () => {
            const bob = new User()
            const message = "It's cold outside"

            bob.publish(message)

            const result = bob.viewTimeline();
            const expectedResult = [message]

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Bob published "It's cold outside" and "I wish it were spring", when he views his timeline, he sees "It's cold outside" and "I wish it were spring"`, () => {
            const bob = new User()
            const message = "It's cold outside"
            const message2 = "I wish it were spring"

            bob.publish(message)
            bob.publish(message2)

            const result = bob.viewTimeline();
            const expectedResult = [message, message2]

            expect(result).to.deep.equal(expectedResult)
        })
    })

    describe("Timeline", () => {
        it(`Bob publishes "I love the fall", then publishes "Not looking forward to winter", Alice views his timeline and sees "I love the fall" and "Not looking forward to winter"`, () => {
            const bob = new User()
            const alice = new User()

            const message = "I love the fall"
            const message2 = "Not looking forward to winter"

            bob.publish(message)
            bob.publish(message2)

            const result = alice.viewWall(bob)
            const expectedResult = [message, message2]

            expect(result).to.deep.equal(expectedResult)
        })

        it(`Alice publishes "When will it be summer?", then publishes "Only 365 more days", Bob views Alice's timeline and sees "When will it be summer?" and "Only 365 more days"`, () => {
            const bob = new User()
            const alice = new User()

            const message = "When will it be summer?"
            const message2 = "Only 365 more days"

            alice.publish(message)
            alice.publish(message2)

            const result = bob.viewWall(alice)
            const expectedResult = [message, message2]

            expect(result).to.deep.equal(expectedResult)
        })
    })
})