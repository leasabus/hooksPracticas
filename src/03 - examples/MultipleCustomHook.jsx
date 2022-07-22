import { useCounter } from '../Hooks/useCounter'
import React from 'react'
import { useFetch } from '../Hooks/useFetch'


export const MultipleCustomHook = () => {
    const { counter, increment} = useCounter(1)
    const {data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    //destructuring
    const {author, quote} = !!data && data [0]
    console.log({author, quote})


    
  return (
    <>
        <h3>The Breaking Bad API</h3>
        <hr />
        {
            isLoading?
            <div className='alert alert-info tetx-center'>
                Loading...
            </div>
            :
            <blockquote className='blockquote text-end'>
                <p className='mb-1'> {quote} </p>
                <footer className='blockquote-footer mt-1'> {author} </footer>
            </blockquote>
        }

        <button className='btn btn-primary m-1' onClick={()=>increment()} disabled={isLoading}>
            next quote
        </button>

    </>
  )
}
