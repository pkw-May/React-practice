import react, {Component} from "react";
import Nav from "./Nav"
import Article from "./Article";
import RightMenu from "./RightMenu";
// import Footer from './Footer';

function Main() {
    return (
        <div className="main-area">
            <Nav></Nav>
            <main>
                <Article></Article>
                <RightMenu></RightMenu>
            </main>
        </div>
    );
}

export default Main;