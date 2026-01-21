import { Layout } from '../components/layout';
import { Hero, ProjectList } from '../components/home';
import './Home.scss';

export const Home = () => {
    return (
        <Layout scrollable={false}>
            <div className="home-container container">
                <div className="home-content">
                    <Hero />
                    <ProjectList />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
