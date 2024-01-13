import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (

        <header>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex items-center sm:justify-between sm:gap-4">
                    <div className="relative hidden sm:block">
                        <label className="sr-only" htmlFor="search"> Search </label>

                        <input
                            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                        />

                        <button
                            type="button"
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                    <Link to="/Books" className='text-gray-400 hover:text-gray-500'>Books</Link >

                <Link to="/Books/Bookes" className='text-gray-400 hover:text-gray-500'>Book list</Link >
                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>


                        </div>

                        <button type="button" className="group flex shrink-0 items-center rounded-lg transition">
                            <img
                                alt="Man"
                                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-10 w-10 rounded-full object-cover"
                            />

                            <p className="ms-2 hidden text-left text-xs sm:block">
                                <strong className="block font-medium">Eric Frusciante</strong>

                                <span className="text-gray-500"> eric@frusciante.com </span>
                            </p>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >

                            </svg>
                        </button>
                        <button className="cursor-pointer group relative flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">

                            logout
                        </button>

                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Barry!</h1>

                    <p className="mt-1.5 text-sm text-gray-500">
                        Explore Worlds on Every Shelf: Library Name 🚀
                    </p>
                </div>
            </div>
        </header>
    )
}
