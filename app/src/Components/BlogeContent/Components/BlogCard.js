export const BlogCard =()=>{
    return(
        <div key={item.id} className="post">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    )
}