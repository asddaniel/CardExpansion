import React from "react";


const blogs = [
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_4.png",
		title: "Decide what type of teacher you want to be",
		date: "Jun 29",
		link: "#",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_3.png",
		title: "How I’m Styling Everyday Black Outfits",
		date: "Aug 15",
		link: "#",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/blog/blog_12_5.png",
		title: "Long lasting fall scent for women sale offer",
		date: "Sep 17",
		link: "#",
	},
];

const categories = [
	{
		count: "3",
		title: "3X-POST LIST",
		link: "#",
	},
	{
		count: "7",
		title: "DESIGN",
		link: "#",
	},
	{
		count: "11",
		title: "DEVELOPMENT",
		link: "#",
	},
	{
		count: "1",
		title: "WORDPRESS",
		link: "#",
	},
	{
		count: "13",
		title: "UI/UX DESIGN",
		link: "#",
	},
	{
		count: "19",
		title: "PHOTOGRAPHY",
		link: "#",
	},
	{
		count: "8",
		title: "PLANNING",
		link: "#",
	},
	{
		count: "9",
		title: "UPDATEDS",
		link: "#",
	},
	{
		count: "5",
		title: "EVENTS",
		link: "#",
	},
	{
		count: "0",
		title: "FINANCE",
		link: "#",
	},
];

const BlogItem = ({ blog }:any) => {
	const { img, title, link, date } = blog;
	return (
		<div className="mt-4">
			<div className="flex items-start">
				<img
					src={img}
					alt={title}
					width="50"
					className="max-w-full h-auto mr-3"
				/>
				<div>
					<a href={link}>
						<h6 className="font-medium mb-2">{title}</h6>
					</a>
					<p className="opacity-75">{date}</p>
				</div>
			</div>
		</div>
	);
};



const Categories = ({ item }:any) => {
	const { title, link, count } = item;
	return (
		<li className="py-4 border-b  text-xl tracking-wide opacity-80">
			<a href={link} className="font-light transition hover:text-blue-600">
				{title} ({count})
			</a>
		</li>
	);
};



const Contents = () => (
	<div>
		<div className="rounded-md border  p-6">
			<img
				src="https://cdn.easyfrontend.com/pictures/blog/blog_9.jpg"
				alt=""
				className="max-h-[600px] w-full object-cover rounded"
			/>
		</div>
		<p className="leading-relaxed text-justify opacity-75 mt-12">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus deleniti
			doloremque dignissimos nemo accusamus, fuga enim velit nesciunt debitis,
			sint rerum! Inventore, vero. Numquam voluptatum at accusamus quisquam iste
			omnis harum voluptatem temporibus obcaecati, ipsa provident architecto
			illo ea illum, exercitationem totam, ratione consectetur laborum! Beatae,
			non aspernatur officia architecto perspiciatis odio adipisci ducimus
			consectetur? Facilis soluta enim molestiae ratione numquam fugit, dicta
			mollitia atque cupiditate eos debitis esse commodi, eveniet perferendis
			alias! Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in
			pariatur fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui
			necessitatibus, facilis voluptate inventore quod similique voluptates eum,
			repudiandae aliquid ea eveniet itaque et molestias temporibus debitis
			consectetur sit quae modi non minima distinctio hic quasi aspernatur!
			Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt
			accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae
			unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium
			exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos,
			molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus
			aperiam praesentium animi magnam, quo totam tempore quod impedit
			cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus.
			Asperiores eos cupiditate optio quae aut molestiae fugiat alias id,
			tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum
			quisquam!
		</p>
		<div className="flex justify-center my-12">
			<img
				src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
				alt=""
				className="max-w-full h-auto rounded"
				width="80%"
			/>
		</div>
		<p className="leading-relaxed text-justify opacity-75">
			Ab molestias blanditiis, voluptatem quisquam ratione quibusdam in pariatur
			fugiat veritatis consequatur, harum alias eos deleniti dicta! Qui
			necessitatibus, facilis voluptate inventore quod similique voluptates eum,
			repudiandae aliquid ea eveniet itaque et molestias temporibus debitis
			consectetur sit quae modi non minima distinctio hic quasi aspernatur!
			Quas, odit maiores nam veritatis repellat tenetur laboriosam sed incidunt
			accusantium temporibus sequi reiciendis atque qui dolor alias. Recusandae
			unde nostrum nobis laudantium, adipisci incidunt? Ex, praesentium
			exercitationem laudantium consectetur obcaecati illo! Totam nesciunt quos,
			molestias earum aut ea voluptatum non officiis iure! Eaque necessitatibus
			aperiam praesentium animi magnam, quo totam tempore quod impedit
			cupiditate deserunt eveniet unde suscipit, vel consectetur, itaque natus.
			Asperiores eos cupiditate optio quae aut molestiae fugiat alias id,
			tempora, dolorem velit, aliquid assumenda aspernatur veniam rerum
			quisquam!
		</p>
		{/* author */}
		<Author />
		{/* related posts */}
		<div className="mt-12 pt-6">
			<h4 className="text-2xl font-medium mb-4">RELETED POSTS</h4>
			<div className="flex flex-col md:flex-row items-center md:items-start gap-4">
				{blogs.map((blog, i) => (
					<BlogItem blog={blog} key={i} />
				))}
			</div>
		</div>
	</div>
);

const Author = () => (
	<div className="bg-blue-600 bg-opacity-10 flex items-start p-6 md:p-12 mt-6 md:mt-12">
		<img
			src="https://cdn.easyfrontend.com/pictures/users/user7.jpg"
			alt=""
			className="max-w-full h-auto rounded-full"
			width="70"
		/>
		<div className="ml-4">
			<h5 className="font-medium text-xl mb-1">Jusa Ara</h5>
			<p className="opacity-75 mb-2">
				11 Feb 2022 in Design, Develop, Wordpress
			</p>
			<p className="leading-relaxed text-justify opacity-75">
				In et volutpat risus. Vestibulum at elementum nibh, at laoreet mauris.
				Ut eget mi in nisl rhoncus suscipit. Donec sed elementum dui. Sed tempus
				sagittis gravida. Etiam sit amet aliquam mauris, non sodales sapien.
				Curabitur non arcu dignissim, consectetur mi ut.
			</p>
		</div>
	</div>
);

export const Article = () => {
	return (
		<section className="ezy__blogdetails6 light py-14 md:py-24 bg-white  text-zinc-900 ">
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 md:gap-8">
					{/* sidebar */}
					<div className="col-span-12 md:col-span-4 lg:col-span-3 order-2">
						<div className="ezy__blogdetails6-categories p-4 lg:p-6">
							<h4 className="text-2xl font-medium mb-6">CATEGORIES</h4>
							<ul className="flex flex-col">
								{categories.map((item, i) => (
									<Categories item={item} key={i} />
								))}
							</ul>
						</div>
					</div>

					<div className="col-span-12 md:col-span-8 lg:col-span-9 order-1">
						<Contents />
					</div>
				</div>
			</div>
		</section>
	);
};
