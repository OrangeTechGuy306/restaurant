import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../../utils/firebase"
import AC from 'agora-chat';


export const Login = ()=>{

    const navigate = useNavigate()
    const handleClick = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async(data)=>{
            const user = {
                name: data.user.displayName, 
                email: data.user.email, 
                id: data.user.uid
            }
            const conn = new AC.connection({
                appKey: '611046340#1222571',
            });
            const options = {
                user: data.user.uid,
                agoraToken: '007eJxTYFAW1nw474bhgvsdRunmq888Pftira50FXea5MWdd7b07pynwGCYlGxpYmpgmJKWlGJilGKZmGxpYWmZmGKelpxikGhhxrLELLUhkJHBavtpRkYGVgZGBiYGEJ+BAQDkjB8P',
            };
            conn.open(options);

      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
     })
      
    }
  
    return(
      <div className='googleBtnContainer'>
          <button onClick={handleClick}>Sign up with Google</button>
      </div>
  
    )
   
  }