import React,{useState,useEffect} from 'react'
import styled,{keyframes} from 'styled-components'
import { signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword,signOut} from 'firebase/auth'
import {auth} from '../library/firebaseConfig';
import { useRouter } from 'next/router'
import { useFullLoginMenu } from '../components/customHook/fullLoginMenuProvider';


const SlideUp = keyframes`
    0%{
        transform: translate3d(100vw,0,0);
    }
    50%{
        transform:translate3d(90vw,0,0);
    }
    100%{
        transform:translate3d(0,0,0);
    };
`;
const SlideOut = keyframes`
    0%{
        transform: translate3d(0,0,0);
    }
    50%{
        transform:translate3d(10vw,0,0);
    }
    100%{
        transform:translate3d(100vw,0,0);
    };
`;


const ContentWrapper =styled.div`
    jusfity-content:center;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:white;
    top: 0;
    right: 0;
    z-index:10000;

    animation: ${({ $animationState }) => $animationState === 'in' ? SlideUp : SlideOut} 1s ease-in forwards;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '0s' : '0.3s'};
`

const WindowWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:100%;
    width:100%;
    align-items:center;
    z-index:10000;
`
const ExitMenu = styled.button`
    width: 5dvh;
    height: 5dvh;
    cursor: pointer;
    background-size: 1.5em;
    border-radius: 20%;
    border:none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.1em;
    display: flex;
    position: absolute;
    top: 1.5em;
    bottom: auto;
    left: auto;
    right: 2em;
`

const ExitMenuWrapper = styled.div`
    display:flex;
    
`
const WindowAnimationIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`
const WindowAnimationOut = keyframes`
    from{
        opacity:1;
    }
    to{
        opacity:0;
    }
`
const MenuWindow = styled.div`
    display:flex;
    height:100%;
    background-color:  #E7E8D1;
    width:38%;
    color:white;
    align-items:center;
    justify-content:center;

    z-index:1;
    opacity:0;

    flex-direction:column;
    animation: ${({ $animationState }) => $animationState === 'in' ? WindowAnimationIn : WindowAnimationOut} 1s ease-in-out forwards;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1s' : '0s'};



`
const LoginWindow = styled(MenuWindow)`
    width:29%;
    height:100%;
    background-image:url('/LoginBackground.jpg');
    background-size: cover;
    background-position: center;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1.15s' : '0s'};
    &::before{
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index:2;
        
      }

`


const RegisterWindow = styled(MenuWindow)`
    width:33%;
    background-color: #A7BEAE;
    animation-delay: ${({ $animationState }) => $animationState === 'in' ? '1.3s' : '0s'};
    z-index:2;
`

const ButtonContainer = styled.div`
    width:50%;
    height:20em;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1.2rem;
    z-index:2;

    
`
const ButtonContainerRegister = styled(ButtonContainer)`
`
//the button
const ContentButtonRegister = styled.button`
    width:40%;
    height:30%  ;
    border:none;
    color:white;
    font-size:18px;
    z-index:2;

    background-color:rgb(87,202,195);
    border-radius:6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color:#0D98BA;
        transform: scale(1.008);
    }

`//the input
const ContentButtonLogin = styled(ContentButtonRegister)`
    background-color:#79D4FF;
    height:30%;


`
const RegisterButton = styled.a`
    transition:0.2s linear;
    font-size:1em;
    color:#3f6366;
    &:hover{
        transform:scale(1.1);
    }
`
const LogoutButton = styled(ContentButtonLogin)`
    height:20%;
    
`
const UserLoggedIn = styled.div`
    color: white;
    text-align: center;
    align-self: stretch;
    font-size: 3dvh;
    font-weight: 500;
    text-decoration: none;
    font-family: Georgia, serif;
    z-index:2;
`
const ContentInput = styled.input`
    width:100%;
    height:35%;
    background-color:#d9ebf4;
    border:none;
    border-radius:6px;/* make the boarder round*/
    font-size:16px;
    padding-left:15px;

    &:focus{
        outline:none;
        border:none;

    }

`
const PasswordInput = styled(ContentInput)`
    height:35%;
`
const ErrorText = styled.div`
    color:red;
`
const MenuButtonWrapper = styled.div`

    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    width:100%;
    height:60%;
    gap:3%;

`
const MenuButtons = styled.a`
    text-align: center;
    align-self: stretch;
    padding-top: 1.5dvh;
    padding-bottom: 1.5dvh;
    font-size: 4dvh;
    font-weight: 500;
    line-height: 1em;
    transition: color .2s;
    text-decoration: none;
    font-family: Georgia, serif;
    color:#3f6366;

    &:hover{
        opacity:0.3;
        transform: scale(1.01);
    }
`
const MenuButtonsBottom = styled(MenuButtons)`
    font-size:1.3em;
`
const WebsiteName = styled.a`
    font-size: 3vw;
    font-weight: bold;
    color: rgb(87,202,195);

    text-decoration:none;
`
const WebName = styled.div`
    font-family: 'poppins-bold', sans-serif !important;
    display:flex;
    flex-direction:row;
    padding-bottom:5em;
`
const ButtomInfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:6em;
    padding-top:10em;
    position:relative;
    width:100%;
    justify-content:center;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height:100%; 
        background: rgb(0,0,0.3);
        opacity:0.12;
        z-index:-1;
    }
`

const FullLoginMenu = ({isVisible, setIsVisible, animationState, setAnimationState}) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [user, setUser] = useState("");

    const router = useRouter();
    const [RegisterErrorMessage, setRegisterErrorMessage] = useState('');
    const [LoginErrorMessage, setLoginErrorMessage] = useState('');
    const [RegisterIsVisible,setRegisterIsVisible] = useState(false);
 

    useEffect(() => { 
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    },[]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out successfully");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleClose = () => {
        setAnimationState('out');
    };
    const handleRegister = () =>{
        setRegisterIsVisible(!RegisterIsVisible);
    }

    useEffect(() => {
        let animationTimeout;
        if(isVisible){
            if (animationState !== 'out') {
            } else if (animationState == 'out') {
                animationTimeout = setTimeout(() => {
                    setIsVisible(false);
                    setAnimationState('idle');
                }, 1600); // Match animation duration
            }
            return () => clearTimeout(animationTimeout);
        }
    }, [animationState]);


    const LoginButton= async ()=>{
        try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        setAnimationState('out');

        console.log(user);
        } catch(error){
            console.log(error.message);
            setLoginErrorMessage("Invalid Email or Password");
        }
    };
    const Register= async ()=>{
        try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user);
        } catch(error){
            console.log(error.message);
            setRegisterErrorMessage("Invalid Email");

        }
    }
    return(
        <>
        <ContentWrapper className="fullscreen-menu" style={{ display: isVisible ? 'flex' : 'none' }} $animationState={animationState}>
            <WindowWrapper>
                {
                    user?(
                        <RegisterWindow $animationState={animationState}>
                        <UserLoggedIn>{user.email}</UserLoggedIn>
                            <ButtonContainer>
                                <LogoutButton onClick={handleLogout}>
                                    Logout
                                </LogoutButton>
                            </ButtonContainer>
                        </RegisterWindow>
                    ):(
                    <RegisterWindow $animationState={animationState}>
                    <ButtonContainerRegister style={{ display: RegisterIsVisible ? 'flex' : 'none' }} $animationState={animationState}>
                        <h1 style={{fontSize:"35px",fontWeight:"bold"}}>Register</h1>
                        <ContentInput placeholder="Enter your User/Email" onChange={(event)=>{setRegisterEmail(event.target.value)}}/>
                        <PasswordInput type="password" placeholder="Enter your Password" onChange={(event)=>{setRegisterPassword(event.target.value)}}/>
                        <ContentButtonRegister onClick={Register}>
                            Register
                        </ContentButtonRegister>
                        <ErrorText>{RegisterErrorMessage}</ErrorText>
                        <RegisterButton onClick={handleRegister}>Back to Login</RegisterButton>
                    </ButtonContainerRegister>
                    <ButtonContainer style={{ display: RegisterIsVisible ? 'none' : 'flex' }} $animationState={animationState}>
                                <h1 style={{fontSize:"35px",fontWeight:"bold"}}>Login</h1>
                                    <ContentInput placeholder="Enter your User/Email" onChange={(event) => setLoginEmail(event.target.value)}/>
                                    <PasswordInput type="password" placeholder="Enter your Password" onChange={(event) => setLoginPassword(event.target.value)}/>
                                    <ContentButtonLogin onClick={LoginButton}>
                                        Login
                                    </ContentButtonLogin>
                                <ErrorText>{LoginErrorMessage}</ErrorText>
                                <RegisterButton onClick={handleRegister}>Register</RegisterButton>
                    </ButtonContainer>
                </RegisterWindow>
                )
                }
                        <LoginWindow $animationState={animationState}>
                        </LoginWindow>
                <MenuWindow $animationState={animationState}>
                    <ExitMenuWrapper>
                    <ExitMenu onClick={handleClose}>X</ExitMenu>
                    </ExitMenuWrapper>
                    <MenuButtonWrapper>
                        <WebName>
                             <WebsiteName href="/">GenoDo</WebsiteName>
                        </WebName>
                        <MenuButtons href = "/">
                            Home
                        </MenuButtons>
                        <MenuButtons href = "/searchPage">
                            Search
                        </MenuButtons>
                        <MenuButtons href = "/searchHistory">
                            Search History
                        </MenuButtons>
                    </MenuButtonWrapper>
                    <ButtomInfoWrapper>
                        <MenuButtonsBottom href = "/searchPage">
                            Contact
                        </MenuButtonsBottom>
                        <MenuButtonsBottom href = "/about">
                            About
                        </MenuButtonsBottom>
                        

                    </ButtomInfoWrapper>
                </MenuWindow>
            </WindowWrapper>
        </ContentWrapper>
        </>
    )
}

export default FullLoginMenu