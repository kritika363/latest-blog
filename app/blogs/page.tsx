import React from 'react';
import Postdata from '../component/posts/page';

interface data {
  title : string;
  body : string;
}

const getPost = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok){
       throw new Error("not found")
    }
    return res.json();
}

const Blog = async() => {
  const Posts = await getPost();
  return (
    <div className='blog best '>
      <h2 className=" text-center text-4xl mb-5 font-700">News &  <span className="text-red-800"> Feed</span></h2>
 <div className='outer-blog container grid grid-cols-1 md:grid-cols-3 gap-8'>
      {Posts.slice(0, 6).map((item : data) => (
        <Postdata kv={item}/>
      )
      )}
    </div>
    </div>
   
  )
}

export default Blog