import React from 'react'
import Book from './Book'
const bookList = [
    { author: "Author1", title: "Title1", price: 20.99 },
    { author: "Author2", title: "Title2", price: 15.50 },
    { author: "Author3", title: "Title3", price: 25.75 }
];
export default function Bookes() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">



<div class="grid grid-cols-1 md:grid-cols-3 gap-4">


{

    bookList.map((item)=>{
        return   <div class=" p-4"><Book item={item} /></div>
    })
}
           
      </div>        


        </div>
    )
}
