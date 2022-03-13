import React, {useEffect, useState} from 'react'
import Form from "../../Form/Form"
import footlogo from "../../../assets/img/footlogo.svg"
import {useQuery} from "@apollo/client";
import {GET_CONTENT} from "../../../apollo/queries";

const Footer = () => {

    const [address, setAddress] = useState("")
    const [tel, setTel] = useState("")
    const [telCall, setTelCall] = useState("")

    const { data } = useQuery(GET_CONTENT)

    useEffect(() => {
        if(data){
            setAddress(data.posts.nodes[0].acfcontent.address)
            setTel(data.posts.nodes[0].acfcontent.telFront)
            setTelCall(data.posts.nodes[0].acfcontent.telCall)
        }
    },[data])

    return (
        <footer className="footer">
            <div className="in">
                <div className="col-1 xs-col-0" />
                <div className="col1 | col-2 xs-col-4">
                    <div className="caption">Связаться с нами</div>
                    <ul>
                        <li>{address}</li>
                        <li><a href={"tel:" + telCall}>{tel}</a></li>
                        <li>По будням с 9:00 - 20:00</li>
                    </ul>
                </div>
                <div className="col2 | col-4 xs-col-4 d_f jc_c">
                    <Form />
                </div>
                <div className="col3 | col-4 xs-col-4 d_f ai_c jc_c">
                    <img src={footlogo} alt="logo"/>
                </div>
                <div className="col-1 xs-col-0" />
            </div>
        </footer>
    );
};

export default Footer;