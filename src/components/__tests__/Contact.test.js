import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact or not",()=>{
    render(<Contact/>);

    const heading=screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load contact or not",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");

    expect(button).toBeInTheDocument();
})

test("Should load contact or not",()=>{
    render(<Contact/>);

    const button1=screen.getByText("Submit");

    expect(button1).toBeInTheDocument();
})

test("Should load contact or not",()=>{
    render(<Contact/>);

    const inputBox=screen.getAllByRole("textbox");
console.log(inputBox.length);

expect(inputBox.length).toBe(2);
})