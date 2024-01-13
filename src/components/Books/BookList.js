import React from 'react'
import Book from './Book'
import BookResrve from './BookResrve';
const bookList = [
    { author: "Author1", title: "Title1", price: 20.99 },
    { author: "Author2", title: "Title2", price: 15.50 },
];
export default function BookList() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">


<h1 className='text-3xl text-gray-600'>Book list :</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">

{

    bookList.map((item)=>{
        return   <div class=" p-4"><BookResrve item={item} /></div>
    })
}
           
      </div>        


        </div>
    )
}
