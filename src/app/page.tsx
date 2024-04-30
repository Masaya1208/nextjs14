import Image from "next/image";
import Link from "next/link";
import { BlogType } from "./types";

async function fetchALLblogs(){
  const res = await fetch('http://localhost:3000/API/blog/', {
    cache:"no-store",
});
  const data = await res.json()
  //console.log(data);
  return data.blogs;
}


export default async function Home() {

  const blogs = await fetchALLblogs();

  return (
    <div className="w-screen">
      <div className="bg-black text-white p-2 flex items-center justify-center">
        BLOG
      </div>
      <div className="bg-blue-200 h-screen flex flex-col items-center scroll-py-5" >
        <h1 className="font-bold text-3xl pt-14">Home</h1>
        <p className="px-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit ad adipisci a error quae corrupti soluta, nobis vel odio saepe fugiat quas nisi modi illum nam. Aliquam, quis nobis.{" "}</p>
        <Link href="/blog/create">
          <button className="px-5">
            new blog
          </button>
        </Link>
        <div className="w-full flex flex-col items-center">
          {blogs.map((blog: BlogType) => ( 
            <div className="w-2/3  px-4 py-2  border rounded-lg">
              <div className="w-full flex flex-col items-center">
                <div className="w-full px-4 py-2 border rounded-lg border-gray-700 flex justify-center">
                  <h1 className="font-bold text-xl">{blog.title}</h1>
                  <div className="space-x">

                  <Link href="/blog/edit">
                    edit</Link>
                  <button>delete</button>
                   </div>
                </div>
              </div>
              <h1 className="test-sm">{blog.createdAt}</h1>
              <h1>{blog.content}</h1>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
