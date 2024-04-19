import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink} from '@fortawesome/free-solid-svg-icons';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Head = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`







const LinkIcon = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #306EE8;
`;

const CertificateText = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
`;




const AchievementCard = ({ achievements }) => {
    // return (
    //     <Card>
    //         <Top>
    //             <Image src={achievements.img} />
    //             <Body>
    //                 <DESC>{achievements.desc}</DESC>
    //                 {/* <Company>{achievements.company}</Company>
    //                 <Date>{achievements.date}</Date> */}
    //             </Body>
    //         </Top>
    //         <Description>
    //             {achievements?.desc &&
    //                 <Span>{achievements?.desc}</Span>

    //             }
    //             {/* {achievements?.skills &&
    //                 <>
    //                     <br />
    //                     <Skills>
    //                         <b>Skills:</b>
    //                         <ItemWrapper>
    //                             {achievements?.skills?.map((skill, index) => (
    //                                 <Skill>• {skill}</Skill>
    //                             ))}
    //                         </ItemWrapper>
    //                     </Skills>
    //                 </>
    //             } */}
    //         </Description>
    //         {/* {achievements.doc &&
    //             <a href={achievements.doc} target="new">
    //                 <Document src={achievements.doc} />
    //             </a>
    //         } */}
    //             <a href={achievements.link} target="_blank" rel="noopener noreferrer">
    //                 <AchievementIcon src={achievements.icon} />
    //             </a>
    //     </Card>
    // );
    const [showDocument, setShowDocument] = useState(false);

    const openDocument = () => {
        window.open(achievements.link, '_blank'); // Opens the document in a new tab
    };

    return (
        <Card
            onMouseEnter={() => setShowDocument(true)}
            onMouseLeave={() => setShowDocument(false)}
        >
            <Top>
                <Image src={achievements.img} />
                <Body>
                    <Head>{achievements.head}</Head>
                </Body>
            </Top>
            <Description>
                {achievements?.desc && <Description>{achievements?.desc}</Description>}
            </Description>
            {showDocument && (
                <LinkIcon onClick={openDocument}>
                    <FontAwesomeIcon icon={faLink} />
                    {/* <FaFilePdf size={24} style={{ marginRight: '12px' }} /> */}
                    <CertificateText>Link</CertificateText>
                </LinkIcon>
            )}
        </Card>
    );
};

export default AchievementCard

