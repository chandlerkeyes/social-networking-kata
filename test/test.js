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
    })
})