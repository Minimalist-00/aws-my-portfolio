import Container from './components/Container';
import ExperienceTimeline from './components/ExperienceTimeline';
import Profile from './components/Profile';
import { experienceData, profileData } from './data/mockData';

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
            <ExperienceTimeline items={experienceData} title="Experience" />
          </div>

          {/* <div id="events" className="scroll-mt-20">
            <EventsTimeline items={eventsData} title="Events & Awards" />
          </div> */}
        </Container>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
