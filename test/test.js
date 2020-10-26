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
    })
})