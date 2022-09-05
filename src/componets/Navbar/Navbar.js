import React, {useState} from "react";
import * as S from "./Navbar.styles";


const Navbar = () => {
    const clickItemNav = (item) => {
        console.log(item);
        document.getElementById(item).scrollIntoView({ behavior: "smooth" });
    };


    const [showMenuBurguer, setShowMenuBurguer] = useState(false);
    return (
        <S.ContainerNavbar>
            <S.ContainerLogo>
                <img src="/img/Manuell.png" alt="logo manuel" />
                <div>

                    <h1>Manuel Garin</h1>
                    <h2>Fullstack Developer</h2>
                </div>
            </S.ContainerLogo>
            <S.ContainerBurguer onClick={()=>setShowMenuBurguer(!showMenuBurguer)}>
                <S.BurguerMenu/>
                <S.BurguerMenu/>
                <S.BurguerMenu/>
            </S.ContainerBurguer>
            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
                <p onClick={() => clickItemNav("about-me")}>About me </p>
                <p onClick={() => clickItemNav("projects")}>Projects</p>
                <S.Button onClick={() => clickItemNav("contact")}>🙌Contact me</S.Button>

            </S.ContainerItems>
        </S.ContainerNavbar>
    );
}
export default Navbar;