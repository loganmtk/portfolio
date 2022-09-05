import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";


const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/loganmtk",
            logo: logoGithub,
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/manuel-garin-anastacio-29697422b/",
            logo: logoLinkedin,
        },


    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, i'm</p>
                        <p>Manuel Garin</p>
                        <p>Full stack Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        lorem ipsum lorem ipsum lorem ipsum lorem upsum lorem lorem ipsum
                        lorem upsum lorem lorem ipsum .lorem upsum lorem lorem ipsum lorem
                        upsum lorem
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={network.link}
                                target="__blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/profile.png" alt="Manuel Garin - Full stack Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};

export default AboutMe;