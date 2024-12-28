import { blogSingleData } from '../../../../Data/Blog/BlogData'
import { LI, UL } from '../../../../AbstractElements'
import BlogComment from './BlogComment'

const CommentSection = () => {
  return (
    <UL className='simple-list'>
        {blogSingleData.map((data,i)=>(
            <LI key={i}>
                {data.id !== 2 ?
                 <BlogComment data={data} /> : 
                 <UL className='simple-list flex-row'>
                    <LI>
                        <BlogComment data={data} />
                    </LI>
                 </UL>
                }
            </LI>
        ))}
    </UL>
  )
}

export default CommentSection