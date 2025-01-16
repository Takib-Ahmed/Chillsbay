import Activities from './Activities';
import Gellary from './Gellary';
import Hero from './Hero';
import PaymentMethod from './PaymentMethod';
import TopActivities from './TopActivities';
import UpcomingEvents from './UpcomingEvents';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Activities />
            <TopActivities />
            <PaymentMethod />
            <UpcomingEvents />
            <Gellary />
        </>
    );
};

export default HomePage;