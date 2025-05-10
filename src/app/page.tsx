import Container from './components/Container';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import { eventsData, experienceData, profileData } from './data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}

      <main className="flex-grow py-2 px-6">
        <Container>
          <div id="profile" className="scroll-mt-20">
            <Profile {...profileData} />
          </div>

          <div id="experience" className="scroll-mt-20">
            <Timeline items={experienceData} title="Experience" />
          </div>

          <div id="events" className="scroll-mt-20">
            <Timeline items={eventsData} title="Events & Awards" />
          </div>
        </Container>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

