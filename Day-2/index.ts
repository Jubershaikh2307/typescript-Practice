import axios from "axios"

// Typescript = javascript + A type System

// The Type system = Help us catch error during develop, use type annotation top analyze our code, On;y active during development , Does'nt provide any performance optimization

// Compilation of the type script

// TypeScript code -> Typescript Compiler -> plain javascript

// fetch request from server

const url: string = "https://jsonplaceholder.typicode.com/todos"

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

axios.get(url).then(res => {
    const todo: Todo[] = res.data
    
})