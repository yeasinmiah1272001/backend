
import { useLoaderData, useParams } from 'react-router-dom';

const NavBlog = () => {
       const navBlog = useLoaderData()
       console.log(navBlog)
       const {id} = useParams()
       console.log(id)
       return (
              <div className='p-32'>

                    
              </div>
       );
};

export default NavBlog;