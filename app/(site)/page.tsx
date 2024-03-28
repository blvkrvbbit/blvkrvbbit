import { getProjects } from '@/sanity/sanity.utils';
import './home.styles.css';
import { Project } from '@/types/sanity/Project';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { PortableText } from '@portabletext/react';
import ScrollSnap from '../components/scroll-snap/scroll-snap.component';
import ScrollSnapSection from '../components/scroll-snap-section/scroll-snap-section.component';
import ContactForm from '../components/contact-form/contact-form.component';

export default async function Home() {
  const projects: Project[] = await getProjects();

  return (
    <ScrollSnap>
      <section className='hero lg:pt-12'>
        <h1 className='text-8xl mt-40 mb-2'>
          Hi, I&apos;m <br /> <span className='font-bold'>Blvk</span>{' '}
          <span className='font-bold'>Rvbbit</span>.
        </h1>
        <p className='font-medium text-xl'>
          a.k.a. <span className='font-bold'>Jordan Myers</span>
        </p>
        <div className='snap-arrow flex justify-center'>
          <a href='#works'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='4.5rem'
              height='4.5rem'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'
              />
            </svg>
          </a>
        </div>
      </section>
      <ScrollSnapSection title='works'>
        <div className='projects grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pb-8'>
          {projects.map((project) => (
            <div key={project._id}>
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  height={0}
                  width={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                />
                <h2>recipe page</h2>
                <PortableText value={project.description} />
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end'>
          <button>View More</button>
        </div>
      </ScrollSnapSection>
      <ScrollSnapSection title='about'>
        <div className='space-y-4'>
          <p className='max-w-prose'>
            {`Hello there! I'm Jordan, a passionate web developer based in
          beautiful Edmonton, Alberta. With a warm cup of coffee by my side, I
          delve into the world of coding, constantly seeking new challenges and
          opportunities to expand my skills.`}
          </p>
          <p className='max-w-prose'>
            {`Beyond coding, I'm known for my friendly demeanor and collaborative
          spirit. I believe in the power of teamwork and enjoy working alongside
          others to bring ideas to life.`}
          </p>
          <p className='max-w-prose'>{`Let's connect and create something amazing together!`}</p>
        </div>
      </ScrollSnapSection>
      <ScrollSnapSection title='contact'>
        <ContactForm />
      </ScrollSnapSection>
    </ScrollSnap>
  );
}
