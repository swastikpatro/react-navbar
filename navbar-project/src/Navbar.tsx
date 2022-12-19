import { useEffect, useRef, useState } from 'react';

import logo from './assets/logo.svg';

import { FaBars } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { links, social } from './data';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linksContainerRef = useRef<HTMLDivElement>(null!);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const linksHeight = linksRef.current?.getBoundingClientRect().height!;

    if (isNavOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isNavOpen]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button
            className={isNavOpen ? 'nav-toggle cancel-btn' : 'nav-toggle'}
            onClick={() => {
              setIsNavOpen((prev) => !prev);
            }}
          >
            {isNavOpen ? <CgClose /> : <FaBars />}
          </button>
        </div>

        <div
          className={
            isNavOpen ? 'links-container show-container' : 'links-container'
          }
          ref={linksContainerRef}
        >
          <ul className='links' ref={linksRef}>
            {links.map((singleLink) => {
              const { id, url, text } = singleLink;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((singleSocialIcon) => {
            const { id, url, icon } = singleSocialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
