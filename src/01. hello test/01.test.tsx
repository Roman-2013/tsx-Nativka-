import {mult, splitIntowords, sum} from "./01";

test("spliting into words shold be correct", () => {
//data
    const sentens1 = "Hello my friends"
    const sentens2 = "Js the best programming language"
//action
    const rezult1 = splitIntowords(sentens1)
    const rezult2 = splitIntowords(sentens2)

    //expect rezult
   expect(rezult1.length).toBe(3)
   expect(rezult1[0]).toBe("Hello")
   expect(rezult1[1]).toBe("my")
   expect(rezult1[2]).toBe("friends")

    expect(rezult2.length).toBe(5)
    expect(rezult2[0]).toBe("Js")
    expect(rezult2[1]).toBe("the")
    expect(rezult2[2]).toBe("best")
    expect(rezult2[3]).toBe("programming")
    expect(rezult2[4]).toBe("language")
})
let a=1
let b=2
let c=3


test('sum schold be correct',()=>{
    const rezult3=mult(a,b)
    const rezult4=sum(a,c)

    expect(rezult3).toBe(2)
    expect(rezult4).toBe(4)
})