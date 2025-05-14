import Dashboard from './Dashboard';

import WelcomeTip from './WelcomeTip';

import '../styles/Home.scss';

export default function Home() {
  return (
    <div className="home">
      <WelcomeTip />
      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}
