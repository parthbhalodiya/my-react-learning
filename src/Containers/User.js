
import { useParams} from 'react-router-dom';

const User = () => {
   let slug =  useParams();
   console.log(slug)
    return (
        <div>
            user
        </div>
    )
}

export default User
