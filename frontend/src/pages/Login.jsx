import Header from '../components/Header'
import LoginBox from '../components/LoginBox'
import "./login.css"

function Home (){
    return(
        <>
            <Header></Header>
            <main id='mainLogin'>
                <LoginBox></LoginBox>
            </main>
        </>
    )

}
export default Home;