import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id='1'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='2'
          name='Countsy the Number Wizrd'
          topic='Derivates and Integrals'
          subject='math'
          duration={30}
          color='#efd0ff'
        />
        <CompanionCard
          id='3'
          name='Vebra the Vocabulary Builder'
          topic='English Literature'
          subject='Language'
          duration={30}
          color='#bde7ff'
        />
      </section>

      <section className='home-section'>
        <CompanionList />
        <CTA />
      </section>
    </main>
  )
}

export default Page