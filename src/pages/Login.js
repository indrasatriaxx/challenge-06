import Image from 'react-bootstrap/Image';
import CarsImage from '../assets/img_cars2.svg';
import '../styles/Login.css'
import {useDispatch, useSelector} from 'react-redux';
import { LoginGoogle, LoginEmail } from '../config/redux/actions/authAction'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';


const Login = () => {
  const {dataLogin} = useSelector((state) => state.authReducer);
  console.log(dataLogin);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLoginGoogle = async () => {
      const data = await dispatch(LoginGoogle());
      if(data) navigate("/home"); //di return di bagian actionnya
  } 

  const handleLoginEmail = () => {
    dispatch(LoginEmail(email, password));
    setTimeout(() => {
      navigate("/dashboard")}, 1500) 
  }

  useEffect(() => {
    if(dataLogin?.email === "admin@mail.com") navigate("/dashboard");
    if(dataLogin !== null && dataLogin?.email !== "admin@mail.com") navigate("/home")
  },[]);

    return(
        <>
        <div className="login d-flex align-items-center ">
            <div className="log-img">
                <Image src={CarsImage} alt="cars image" className="img-login w-100 vh-100 img-fluid"/>
            </div>
     
            <div className="login-form m-auto font-weight-bold">
                <p className="w-0 login-logo"></p>
                <h1>Welcome, Admin BCR</h1>
                <div className="form">
                    <div className="form-outline mb-4 mt-4">
                        <label className="form-label">Email</label>
                        <input 
                        type="email"  
                        id="form2Example18" 
                        className="placeholders form-control form-control-lg" 
                        placeholder="Contoh: johndee@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <label className="form-label" >Password</label>
                        <input 
                        type="password" 
                        id="form2Example28" 
                        className="form-control form-control-lg" 
                        placeholder="6+ karakter"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="pt-1 mb-4 d-flex flex-column">
                        <button onClick={handleLoginEmail} className="btn btn-click-login btn-test font-weight-bold">Sign In</button>
                    </div>

                    <button onClick={handleLoginGoogle} className="btn-login-google">Login with Google</button>
                </div>
            </div>
        </div>

        </>
    )
}
export default Login;