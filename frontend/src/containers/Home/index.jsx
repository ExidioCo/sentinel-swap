import Address from './ToAddress';
import Amount from './Amount';
import Card from '../../components/Card';
import Connect from './Connect';
import ModalConnect from './ModalConnect';
import ModalStatus from './ModalStatus';
import React from 'react';
import Submit from './Initiate';
import Typography from '../../components/Typography';

const Home = () => {
    return (
        <>
            <ModalConnect/>
            <ModalStatus/>
            <div className="swap">
                <Typography
                    className="title"
                    value="swap"
                />
                <Card className="card-swap">
                    <Connect/>
                    <Address/>
                    <Amount/>
                    <Submit/>
                </Card>
            </div>
        </>
    );
};

export default Home;
