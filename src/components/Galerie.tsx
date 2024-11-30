import "./trianglify/trianglify.bundle.js"
import "./trianglify/tweenMax.min.js"
import "./trianglify/cardPolygon.min.js"
import "./trianglify/scrollToPlugin.js"
import "./trianglify/tweenMax.min.js"
// import "./trianglify/cache.min.js"
import {action} from "./trianglify/action.js"
import { useEffect } from "react"
import { Article } from "./Article.js"


const articles = [
    {
        title:"Article 1",
        description: "about article 1", 
        img:"img/a.jpg", 
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam! "
    },
    {
        title:"Article 2",
        description: "about article 2", 
        img:"img/b.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    },
    {
        title:"Article 3",
        description: "about article 3", 
        img:"img/c.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    }, 
    {
        title:"Article 4",
        description: "about article 4", 
        img:"img/d.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    }, 
    {
        title:"Article 5",
        description: "about article 5", 
        img:"img/e.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    }, 
    {
        title:"Article 6",
        description: "about article 6", 
        img:"img/f.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",

    }, 
    {
        title:"Article 7",
        description: "about article 7", 
        img:"img/g.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    },
    {
        title:"Article 8",
        description: "about article 8", 
        img:"img/h.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis, sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste omnis harum voluptatem temporibus obcaecati, ipsa provident architecto illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae, non aspernatur officia architecto perspiciatis odio adipisci ducimus consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui necessitatibus, facilis voluptate inventore quod similique voluptates eum, repudiandae aliquid ea eveniet itaque et molestias temporibus debitis consectetur sit quae modi non minima distinctio hic quasi aspernatur! Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos, molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus aperiam praesentium animi magnam, quo totam tempore quod impedit cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus. Asperiores eos cupiditate optio quae aut molestiae fugiat alias id, tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum quisquam!",
    }, 

]



export default function Galerie(){

    useEffect(()=>{

        //@ts-ignore
            action.init();
    }, [])


    return <div className="container">
    
    <div className="content">
   
        <div className="pattern bg-zinc-800 pattern--hidden"></div>
       
        <div className="wrapper">
            {articles.map((item, i) => (
                <div key={i} className="card">
                <div className="card__container card__container--closed">
                    <svg className="card__image w-screen  " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1920 500" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <clipPath id={`clipPath${i}`}>
                                <polygon className="clip" points="0,500 0,0 1920,0 1920,500"></polygon>
                            </clipPath>
                        </defs>
                        <image className="" clip-path={`url(#clipPath${i})`} width="1920" height="500" href={item.img}></image>
                    </svg>
                    <div className="card__content">
                        <i className="card__btn-close fa fa-times">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                            fill="none" stroke="currentColor" stroke-width="2" 
                            stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/>
                            <path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                        </i>
                        <div className="card__caption">
                            <h2 className="card__title">{item.title}</h2>
                            <p className="card__subtitle">{item.description}</p>
                        </div>
                        <div className="w-full p-3">
                        <Article />
                        </div>
                    </div>
                </div>
            </div>
            ))}
          
          
        </div>
       
    </div>
   
    
</div>
}