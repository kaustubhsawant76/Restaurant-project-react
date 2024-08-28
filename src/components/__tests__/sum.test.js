import { sum } from "../sum";

test("show the result of sum",()=>{
    const result=sum(6,8);

    //ASSERTION
    expect(result).toBe(14);
})