import React from "react";
import { css } from "emotion";
import FocusLock from "react-focus-lock";

import SocialLink from "./SocialLink";
import NavItem from "./NavItem";
import Modal from "./Modal";
import { CloseIcon } from "./icons";

import { colors, styles } from "../theme";
import { handleLinkClick, useBoolDelay } from "../utils";

const liStyle = css`
  list-style: none;
  text-align: center;
  font-size: 1.5rem;
  margin: 5px 0;
  letter-spacing: 0.2rem;
  transform: translateY(-1200px);
`;

function NavList({ open, children }) {
  const childCount = React.Children.count(children);

  return (
    <ul
      className={css`
        margin-bottom: 20px;
        & li {
          list-style: none;
          margin: 0;
          text-align: center;
          font-size: 1.5rem;
          margin: 5px 0;
          letter-spacing: 0.2rem;
          transform: translateY(${open ? "0" : "-1200px"});
        }
        ${createListTransitions(open, childCount)}
      `}
    >
      {children}
    </ul>
  );
}

function CloseButton({ onClick, addMarginRight = 0 }) {
  return (
    <button
      aria-label="Close"
      className={css`
        ${styles.blankButton}
        color: ${colors.text};
        position: fixed;
        padding: 4px 6px;
        cursor: pointer;
        top: 8px;
        right: ${21 + addMarginRight}px;
        transition: color 0.2s;
        &:hover line {
          stroke: ${colors.secondary};
        }
      `}
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
}

function MobileNav({ open, closeNav, sectionRefs, scrollBarWidth }) {
  const show = useBoolDelay(open, 0, 300);
  const render = show || open;
  const visible = show && open;

  if (!render) {
    return null;
  }

  return (
    <FocusLock autoFocus={false}>
      <Modal
        className={css`
          transform: translateY(${visible ? "0" : "-100%"});
          transition: transform 0.3s ease-out;
        `}
        show={visible}
      >
        {visible && (
          <CloseButton onClick={closeNav} addMarginRight={scrollBarWidth} />
        )}
        <nav
          className={css`
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
          `}
        >
          <NavList open={visible}>
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.projects, closeNav)}
              href="#projects"
              label="PORTFOLIO"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.skills, closeNav)}
              href="#skills"
              label="SKILLS"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.about, closeNav)}
              href="#about"
              label="ABOUT"
            />
            <NavItem
              className={liStyle}
              onClick={handleLinkClick(sectionRefs.contact, closeNav)}
              href="#contact"
              label="CONTACT"
            />
          </NavList>
          <div
            className={css`
              text-align: center;
              transform: translateY(${visible ? "0" : "-1200px"});
              transition: transform 0.3s 0.2s;
              & a {
                margin: 0 12px;
              }
            `}
          >
            {/* <SocialLink
              type="LinkedIn"
              href="https://www.linkedin.com/in/noah-sim-392a9a241"
              width="24px"
              height="24px"
            /> */}
            <SocialLink
              type="Github"
              href="https://github.com/fulldev001"
              width="24px"
              height="24px"
            />
            <SocialLink
              type="CodePen"
              href="https://codepen.io/aaronchupa"
              width="24px"
              height="24px"
            />
          </div>
        </nav>
      </Modal>
    </FocusLock>
  );
}

function createListTransitions(open, count) {
  const speed = ".3s";
  let transitions = "";

  for (let i = 1; i <= count; i++) {
    if (open) {
      transitions += `
        & li:nth-of-type(${count - i + 1}) {
          transition: transform ${speed} .${3 + i}s;
        }
      `;
    }
  }
  return transitions;
}

export default MobileNav;
