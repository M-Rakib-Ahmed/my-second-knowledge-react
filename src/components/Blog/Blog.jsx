import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover,reading_time,author, author_img, posted_date,hashTags} = blog;
    
    return (
        <div>
            <img  src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                <img className='size-10 rounded-full mt-8' src={author_img} alt="" />
                <div>
                 <h2 className='text-2xl'>{author}</h2>
                 <p>{posted_date}</p>
                </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>    
                </div>
            </div>
          <h2 className='text-4xl mt-5 mb-6'>{title}</h2> 
          {
            hashTags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
          } 
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;