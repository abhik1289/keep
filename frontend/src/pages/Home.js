import BodyPart from "../components/BodyPart";
import Home from "../components/BodyPart/Home";
import Header from "../components/header";


function HomePage({width,SetWidth}) {

    return (<section>
     <Header SetWidth={SetWidth} width={width} />
     <BodyPart body={<Home/>} width={width}  SetWidth={SetWidth} />
    </section>);
}

export default HomePage;