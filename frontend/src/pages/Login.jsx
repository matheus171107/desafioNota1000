import Header from '../components/Header'
import LoginBox from '../components/LoginBox'
import "./style.css"

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